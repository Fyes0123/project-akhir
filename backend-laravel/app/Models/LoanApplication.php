<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class LoanApplication extends Model
{
    /** @use HasFactory<UserFactory> */
    use HasFactory;
    protected $fillable = [
    'user_id',
    'amount',
    'tenor_value',
    'tenor_unit',
    'purpose_category',
    'purpose_description',
    'monthly_income',
    'status',
    'submission_date',
    'admin_notes',
];
}
