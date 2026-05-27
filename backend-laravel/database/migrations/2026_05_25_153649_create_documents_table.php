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
        Schema::create('documents', function (Blueprint $table) {
    $table->id();
    $table->foreignId('loans_application_id')->constrained('loans_application')->onDelete('cascade');
    $table->string('document_type');
    $table->string('file_path');
    $table->enum('verification_status', ['pending', 'approved', 'rejected', 'revision'])->default('pending');
    $table->text('notes')->nullable();
    $table->timestamp('uploaded_at')->nullable();
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
