import Content from '../models/content.model.js';

// Create content
export const createContent = async (req, res) => {
    const { title, body, createdBy } = req.body;

    if (!title || !body || !createdBy) {
        return res.status(400).json({ message: 'Missing required fields: title, body, or createdBy' });
    }

    try {
        const newContent = new Content({
            title,
            body,
            createdBy,  // ID of the user creating the content
        });

        const savedContent = await newContent.save();
        res.status(201).json({ message: 'Content created successfully', content: savedContent });
    } catch (error) {
        res.status(500).json({ message: 'Error creating content', error: error.message });
    }
};
