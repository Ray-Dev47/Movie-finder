<template>
	<div>
		<div class="max-w-6xl mx-auto">
			<!-- main -->
			<div class="mt-60 text-center">
				<div class="text-4xl sm:text-5xl font-bold">MovieFinder</div>
				<div class="text-lg font-bold mt-4 mb-10 text-gray-800">
					Want to find out about a movie? We've got you!
				</div>
				<!-- search movie -->
				<div>
					<input
						type="text"
						class="form-input text-gray-500 text-2xl sm:text-5xl font-bold w-10/12 border-custom-orange border-t-0 border-r-0 border-l-0 border-b-2 sm:border-b-4 p-3 outline-none mb-3 placeholder-gray-400"
						placeholder="Search by title... "
					/>
					<i class="fas fa-search text-3xl sm:text-4xl text-gray-400"></i>
				</div>

				<!-- movie posters -->
				<div class="mt-36">
					<div class="font-bold text-2xl sm:text-4xl mb-10">New Releases</div>
				</div>
			</div>

			<div class="flex flex-row flex-wrap p-4 items-center justify-center sm:justify-between">
				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-1.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">GodZilla Vs KingKong</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star-half-alt"></i>
					</div>
				</div>
				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-2.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2  font-bold text-md sm:text-xl">Zack Synder's Justice League</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star-half-alt"></i>
					</div>
				</div>
				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-3.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2  font-bold text-md sm:text-xl">Chaos Walking</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star-half-alt"></i>
					</div>
				</div>
				<div class="flex flex-col">
					<img
						src="@/assets/img/img-4.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Mortal Kombat</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>

				<!--poster second section  -->
				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-5.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Raya and the Last Dragon</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star-half-alt"></i>
					</div>
				</div>

				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-6.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Thunder Force</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>

				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-7.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl"
						>Mortal Kombat Legends: <br />
						Scorpion's Revenge</span
					>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>

				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-8.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Twist</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:pb-14">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star-half-alt"></i>
					</div>
				</div>

				<!-- poster third section  -->
				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-9.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Tom & Jerry</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>
				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-10.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Monster Hunter</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star-half-alt"></i>
					</div>
				</div>

				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-11.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Cherry</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>

				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-12.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Sentinelle</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-14">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>

				<!-- poster fourth section  -->
				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-13.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Outside the Wire</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>

				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-14.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Bajocero</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>

				<div class="flex flex-wrap flex-col">
					<img
						src="@/assets/img/img-15.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Wonder Woman 1984</span>
					<div class="flex text-md sm:text-lg text-red-500 mb-10 sm:mb-0">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star-half-alt"></i>
					</div>
				</div>

				<div class="flex flex-wrap flex-col ">
					<img
						src="@/assets/img/img-16.jpg"
						alt="godzilla"
						class="card w-80 sm:w-64 h-80 object-cover hover:shadow-inner transform hover:scale-105 transition duration-500 ease"
					/>
					<span class="py-2 font-bold text-md sm:text-xl">Space Sweepers</span>
					<div class="flex text-md sm:text-lg text-red-500">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
