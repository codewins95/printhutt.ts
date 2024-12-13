import { NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig'
import ReturnPolicy from '@/models/returnPolicyModule';
connect();


export async function GET() {
    try {
        const returnData = await ReturnPolicy.find().select('_id returnPeriod');

        return NextResponse.json(
            {
                message: 'data fetch',
                returnData: returnData
            },
            { status: 201 }
        );

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}