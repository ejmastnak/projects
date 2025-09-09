<script setup>
import Project from '@/Components/Project.vue'

import boardsInstalledImg from '@/assets/img/tv47-attic-gym/5-boards-installed.jpg?w=400'
</script>

<template>
  <div>

    <h1 class="text-5xl">Welcome</h1>

    <div class="mt-5 md:mt-8 max-w-2xl">
      <p>
        <span class="italic font-bold text-[#5e81ac]">Eli</span><span class="italic font-bold text-[#87a2bc]">Projects</span> is a site created in fall 2025 for documenting my building projects to share with friends, family, and acquaintances.
        You'll find write-ups, photos, CAD plans, and the occasional story or anecdote of things I've built.
      </p>

      <p class="mt-2">
        Note: this site is for hobby projects done in my spare time related to home improvment, woodworking, electrical, and adjacent "DIY" fields.
        For professional work see <a href="#" class="text-blue-500 hover:text-blue-600 hover:underline">my portfolio</a> (link to EliPortfolio coming by January 2026).
      </p>
    </div>

    <h2 class="mt-6 md:mt-8 text-3xl">Projects</h2>

    <p class="mt-4">Here is the list of projects — small for now, to be expanded soon:</p>

    <ul class="mt-5 gap-y-2">

      <!-- TV47 attic gym -->
      <li>
        <Project
          title="TV47 attic gym"
          :img="boardsInstalledImg"
          imgAlg="Framework of elastic sleepers build to support the gym's floor."
          href="/tv47/attic-gym"
        >
              A gym built in the attic of our farm at Tolsti Vrh 47 with an elastic, "bouncy" floor to absorb the impact of weights and plyometric exercises while training, and designed to use the exposed timber framing for mounting exercise equipment.
        </Project>
      </li>

    </ul>

  </div>
</template>
