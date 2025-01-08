import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        const filePath = path.join(process.cwd(), 'data', 'appointments.json');

        // Read existing data
        const existingData = fs.existsSync(filePath)
            ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
            : [];

        // Add new appointment data
        const newAppointment = req.body;
        existingData.push(newAppointment);

        // Save to JSON file
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');

        return res.status(200).json({ message: 'Appointment saved successfully!' });
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
