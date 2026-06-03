<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LoanApplication;
use App\Models\Document;

class LoanApplicationController extends Controller
{
    public function store(Request $request)
{
    $validated = $request->validate([
    'loanAmount' => 'required|numeric',
    'income' => 'required|numeric',
    'tenorValue' => 'required|integer',
    'tenorUnit' => 'required|in:minggu,bulan,tahun',
    'purposeCategory' => 'required|in:modal_usaha,operasional,pendidikan,renovasi,ekspansi,lainnya',
    'purposeDescription' => 'required|string',
]);

    $loan = LoanApplication::create([
    'user_id' => $request->user_id,
    'amount' => $request->loanAmount,
    'tenor_value' => $request->tenorValue,
    'tenor_unit' => $request->tenorUnit,
    'purpose_category' => $request->purposeCategory,
    'purpose_description' => $request->purposeDescription,
    'monthly_income' => $request->income,
    'submission_date' => now(),
]);
$documents = [
    'ktp',
    'selfie',
    'businessInfo',
    'businessLicense',
    'npwp',
];
foreach ($documents as $doc) {

    if ($request->hasFile($doc)) {

        $path = $request
            ->file($doc)
            ->store('documents');

        Document::create([
            'loan_application_id' => $loan->id,
            'document_type' => $doc,
            'file_path' => $path,
            'uploaded_at' => now(),
        ]);
    }
}
    return response()->json([
        'message' => 'Pengajuan berhasil',
        'loan' => $loan
    ]);
}
public function index()
{
    return LoanApplication::with('user')->get();
}
public function update(Request $request, $id)
{
    $loan = LoanApplication::findOrFail($id);

    $loan->update($request->only([
        'status',
        'admin_notes'
    ]));

    return response()->json($loan);
}
}
