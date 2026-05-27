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
        Schema::create('loans', function (Blueprint $table) {
    $table->id();
    $table->foreignId('loans_application_id')->constrained('loans_application')->onDelete('cascade');
    $table->decimal('interest_rate', 5, 2);
    $table->date('loan_start_date');
    $table->date('loan_end_date');
    $table->decimal('total_amount', 15, 2);
    $table->decimal('remaining_balance', 15, 2);
    $table->enum('status', ['ongoing', 'completed', 'default'])->default('ongoing');
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans');
    }
};
