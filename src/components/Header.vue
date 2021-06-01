<template>
	<div class="w-full top-0 z-30 fixed bg-white p-2 border-b-2 shadow-md">
		<div class="flex justify-between  max-w-6xl mx-auto">
			<div>
                    <router-link to="/">
				<a href="#"
					><img
						class="sm:h-28 sm:w-28 w-16 h-16 cursor-pointer"
						src="@/assets/img/logo.png"
						alt="logo"
				/></a>
                    </router-link>
			</div>
			<div
				class="text-center font-bold flex justify-center  flex-col cursor-pointer"
			>
				<i class="fas fa-lightbulb text-xl sm:text-2xl mx-1"></i>
				<div class=" sm:mt-2">Dark Mode</div>
			</div>
		</div>
	</div>
</template>
