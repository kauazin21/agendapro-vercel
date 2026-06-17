import { NextResponse } from "next/server";
export async function POST(){return NextResponse.json({message:"Endpoint demonstrativo. O fluxo principal usa armazenamento local para funcionar 100% na Vercel."})}
