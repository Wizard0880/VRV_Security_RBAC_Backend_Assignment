import Content from '../models/content.model.js';

// View pending content
export const viewPendingContent = async (req, res) => {
    try {
        const content = await Content.find({ status: 'Pending' })
            .populate('creatorDetails', 'fullname email role');  // Populate creator details

        if (content.length === 0) {
            return res.status(404).json({ message: 'No pending content found' });
        }

        res.json({ content });
    } catch (error) {
        console.error('Error fetching pending content:', error.message);
        res.status(500).json({ message: 'Error fetching pending content' });
    }
};

// Submit feedback on content
export const submitFeedback = async (req, res) => {
    const { contentId, feedback } = req.body;

    if (!contentId || !feedback) {
        return res.status(400).json({ message: 'Content ID and feedback are required' });
    }

    try {
        const content = await Content.findById(contentId);
        if (!content) {
            return res.status(404).json({ message: 'Content not found' });
        }

        // Add the feedback to the content
        content.feedback = feedback;  // Adding feedback
        content.status = 'Reviewed';  // You can update the status after feedback submission
        await content.save();

        res.json({ message: 'Feedback submitted successfully', content });
    } catch (error) {
        console.error('Error submitting feedback:', error.message);
        res.status(500).json({ message: 'Error submitting feedback' });
    }
};
