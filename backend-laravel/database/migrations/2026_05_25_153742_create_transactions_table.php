<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
        $table->id();
        $table->foreignId('loans_id')->constrained('loans')->onDelete('cascade');
        $table->foreignId('payments_id')->nullable()->constrained('payments')->onDelete('set null');
        $table->decimal('amount', 15, 2);
        $table->string('transaction_type'); // disbursement/payment/penalty/refund
        $table->timestamp('transactions_date');
        $table->timestamps();
    });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};
