"use client"
import { ICategory } from '@/types/types';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const CreateCategoryForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<ICategory>();
    const [loading, setLoading] = useState(false)
  const onSubmit = async (data:ICategory) => {
    const baseUrl = process.env.NEXT_PUBLIC_URL;
    try {
        reset()
      setLoading(true)
      const res = await fetch(`
        ${baseUrl}/api/categories
        `,{
          method:'POST',
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(data)
        })
        console.log(res)
        toast.success("Created Successfully")
        setLoading(false)
      } catch (error) {
      console.log(error)
      toast.error("Failed to Create")
    }
  }
  return (
        <>
            <form className='max-w-sm mx-auto space-y-4' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-lg font-bold'>Create New Category</h2>
            <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category Title</label>
                <input {...register("title", { required: true })} type="input" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="category title..." required />
                {errors.title && <span className='bg-red-600'>This field is required</span>}
            </div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Icon</label>
                <select {...register("icon", { required: true })} id="icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option>Phone</option>
                    <option>House</option>
                    <option>Car</option>
                    <option>Television</option>
                </select>
                {errors.icon&& <span className='bg-red-600'>This field is required</span>}
                <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loading?"Creating Category": "Create Category"}</button>
        </form>
        </>
  );
};

export default CreateCategoryForm