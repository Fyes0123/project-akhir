<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Document extends Model
{
    /** @use HasFactory<UserFactory> */
    use HasFactory;
    protected $fillable = [
    'loan_application_id',
    'document_type',
    'file_path',
    'verification_status',
    'notes',
    'uploaded_at',
    ];
}