<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableRelationships extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('favorites', function (Blueprint $table) {
            $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->constrained()
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
        Schema::table('shareds', function (Blueprint $table) {
            $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->constrained()
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
        Schema::table('users_shared', function (Blueprint $table) {
            $table->foreign('user_id')
            ->references('id')
            ->on('users')
            ->constrained()
            ->onDelete('cascade')
            ->onUpdate('cascade');

            $table->foreign('shared_id')
            ->references('id')
            ->on('shareds')
            ->constrained()
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
}
