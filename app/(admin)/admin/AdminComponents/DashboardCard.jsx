import React from "react";

export default function DashboardCard({ title, value }) {
  return (
    <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
      <div class="space-y-2">
        <div class="flex items-center space-x-2 rtl:space-x-reverse text-2xl font-medium text-gray-500 dark:text-gray-400">
          <span>{title}</span>
        </div>

        <div class="text-xl dark:text-gray-100">{value}</div>


        {/* hidden */}
        <div class="hidden -flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600 ">
          <span>3% decrease</span>

          <svg
            class="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>


      </div>
    </div>
  );
}
