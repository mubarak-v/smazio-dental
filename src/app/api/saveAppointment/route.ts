import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    const filePath = path.join(process.cwd(), 'src/data', 'appointments.json');
    
    try {
        const body = await req.json();

        // Read existing data
        const existingData = fs.existsSync(filePath)
            ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
            : [];

        // Add new appointment
        existingData.push(body);

        // Save back to JSON
        fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf8');

        return NextResponse.json({ message: 'Appointment saved successfully!' });
    } catch (error) {
        console.error('Error saving appointment:', error);
        return NextResponse.json({ error: 'Failed to save appointment.' }, { status: 500 });
    }
}
