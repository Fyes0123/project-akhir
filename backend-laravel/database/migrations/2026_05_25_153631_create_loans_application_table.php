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
        Schema::create('loans_application', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
        $table->decimal('amount', 15, 2);
        $table->integer('tenor_value');
        $table->string('tenor_unit'); // bulan/minggu/tahun
        $table->string('purpose_category');
        $table->text('purpose_description')->nullable();
        $table->decimal('monthly_income', 15, 2);
        $table->string('status')->default('pending');
        $table->date('submission_date');
        $table->text('admin_notes')->nullable();
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loans_application');
    }
};
