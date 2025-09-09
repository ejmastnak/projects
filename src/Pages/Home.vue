<script setup>
import boardsInstalledImg from '@/assets/img/tv47-attic-gym/5-boards-installed.jpg?w=400'
</script>

<template>
  <div>

    <h1 class="text-5xl">Welcome</h1>
    <p class="mt-5">
      <span class="italic font-bold text-[#5e81ac]">Eli</span><span class="italic font-bold text-[#87a2bc]">Projects</span> is a site created in fall 2025 for documenting my building projects to share with friends, family, and acquaintances.
      You'll find write-ups, photos, CAD plans, and the occasional story or anecdote of things I've built.
    </p>

    <p class="mt-2">
      Note: this site is for hobby projects done in my spare time related to home improvment, woodworking, electrical, and adjacent "DIY" fields.
      For professional work see <a href="#" class="text-blue-500 hover:text-blue-600 hover:underline">my portfolio</a> (link to EliPortfolio coming by January 2026).
    </p>

    <h2 class="mt-6 text-3xl">Projects</h2>

    <p class="mt-4">Here is the list of projects — small for now, to be expanded soon:</p>

    <ul class="mt-5 space-y-2">
      <li>

        
        <div class="flex">

          <RouterLink class="shrink-0" to="/tv47/attic-gym">
            <img 
              class="object-cover h-28 w-28 rounded-lg"
              :src="boardsInstalledImg" alt="Framework of elastic sleepers build to support the gym's floor." />
          </RouterLink>


          <div class="ml-4 max-w-lg">
            <RouterLink class="text-blue-500 hover:text-blue-600 hover:underline font-semibold leading-snug" to="/tv47/attic-gym">TV47 attic gym</RouterLink>

            <p class="mt-1 sm:mt-0 text-gray-600 dark:text-gray-300 text-sm">
              A gym built in the attic of our farm at Tolsti Vrh 47 with an elastic, "bouncy" floor to absorb the impact of weights and plyometric exercises while training, and designed to use the exposed timber framing for mounting exercise equipment.
            </p>

          </div>

        </div>



      </li>
    </ul>

  </div>
</template>
