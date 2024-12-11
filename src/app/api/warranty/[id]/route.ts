import { NextRequest, NextResponse } from 'next/server';
import { connect } from '@/dbConfig/dbConfig'
import { getDataFromToken } from '@/helpers/getDataFromToken';
import { deleteImage, uploadImage } from '@/lib/cloudinary';
import WarrantyInformation from '@/models/warrantyInformationModel';

connect()

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { role } = await getDataFromToken(request)
        if (role !== 'admin') return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });


        const post = await WarrantyInformation.findById(params.id);
        if (!post) {
            return NextResponse.json(
                { error: "Post not found" },
                { status: 404 }
            );
        }
        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch post" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { role } = await getDataFromToken(request);
        if (role !== 'admin') {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { warrantyType, durationMonths, coverage, claimProcess } = await request.json();


        const existingWarranty = await WarrantyInformation.findById(params.id);

        if (!existingWarranty) {
            return NextResponse.json(
                { error: 'Warranty not found' },
                { status: 404 }
            );
        }

        existingWarranty.warrantyType = warrantyType || existingWarranty.warrantyType;
        existingWarranty.durationMonths = durationMonths || existingWarranty.durationMonths;
        existingWarranty.coverage = coverage || existingWarranty.coverage;
        existingWarranty.claimProcess = claimProcess || existingWarranty.claimProcess;


        await existingWarranty.save();

        return NextResponse.json(
            {
                success: true,
                message: 'Warranty updated successfully',
                data: existingWarranty,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to update Warranty' },
            { status: 500 }
        );
    }
}


export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {

        const { role } = await getDataFromToken(request)
        if (role !== 'admin') return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });

        const deleteData = await WarrantyInformation.findByIdAndDelete(params.id);

        if (!deleteData) {
            return NextResponse.json({ error: "Warranty not found" }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: "Warranty Deleted successfully!",
        });

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to delete post" },
            { status: 500 }
        );
    }
}


export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { role } = await getDataFromToken(request);

        // Check for admin role
        if (role !== 'admin') {
            return NextResponse.json(
                { success: false, message: 'Unauthorized' },
                { status: 401 }
            );
        }

        const { status } = await request.json();

        const updatedWarranty = await WarrantyInformation.findByIdAndUpdate(
            params.id,
            { status },
            { new: true }
        );

        if (!updatedWarranty) {
            return NextResponse.json(
                { success: false, message: 'Warranty not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Successfully updated Warranty"
            },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}