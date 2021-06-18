<template>
	<div>
		<!-- footer -->
		<div class="bg-gray-700 h-50">
			<div
				class="flex sm:justify-between items-center flex-col sm:flex-row max-w-full mx-auto p-8 text-white "
			>
				<div class="sm:mt-6 mt-3">
                    <router-link to="/">
                    <a>
					<img
						class="sm:h-28 sm:w-28 w-20 h-20"
						src="@/assets/img/logo-white.png"
						alt="Workflow logo"
					/>
                    </a>
                    </router-link>
				</div>
				<div
					class="font-bold text-lg flex  flex-col cursor-pointer"
				>
					<div class="flex items-center sm:items-end flex-col ">
						<div class="mt-10 ">
							Developed by Raymond
                        </div>
							<div class="">
								For LoveToKnowMedia
							</div>
                            <div class="text-sm">
                                June 2021
                            </div>				
					</div>
					<div class="mt-6 text-sm sm:text-lg flex-col items-center flex justify-center sm:items-end">
                        The Movie Database API
                        <div>
						<img
							class="h-16 w-16 "
							src="@/assets/img/footer-logo.svg"
							alt="footer logo"
						/>
					</div>
                    </div>
					
				</div>
			</div>
		</div>

		<!-- footer -->
	</div>
</template>



<script>
export default {
	setup() {
		
	},
	
}
</script>
