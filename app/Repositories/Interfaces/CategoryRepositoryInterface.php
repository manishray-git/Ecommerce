<?php
namespace App\Repositories\Interfaces;


interface CategoryRepositoryInterface{
    public function all();
    public function create($request);
    public function find($id);
    public function update($request, $id);
    public function delete($id);
}