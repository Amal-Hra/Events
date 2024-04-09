import { NextResponse } from "next/server";
import { connectToDB } from "../../../../libs/connectionMongodb";
import { Event } from "../../../../libs/models";

export async function GET(req, res) {
    console.log("Trying to connect to the database for GET request...");
    connectToDB();
    const events = await Event.find();
    return NextResponse.json({ events });
}

export async function POST(req, res) {
    try {
        console.log("Trying to connect to the database for POST request...");
        connectToDB();
        const { title, description, date, place, img, alt } = await req.json();
        await Event.create({ title, description, date, place, img, alt });
        return NextResponse.json({ message: "Event created" });
    } catch (error) {
        console.log("Erreur lors de la création d'un événement", error);
    }
}


export async function DELETE(req) {
    console.log("Trying to connect to the database for DELETE request...");
    const id = req.nextUrl.searchParams.get("id");
    connectToDB();
    await Event.findByIdAndDelete(id);
    return NextResponse.json({ message: "Event deleted" }, { status: 200 });
}
