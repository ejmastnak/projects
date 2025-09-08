<script setup>
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'

import originalImg from '@/assets/img/lj16-minioffice/0-original.jpg?w=600'
import originalLightImg from '@/assets/img/lj16-minioffice/0-original-light.jpg?w=600'
import hallwayWiringImg from '@/assets/img/lj16-minioffice/1-hallway-wiring.jpg?w=600'
import interiorLightJunctionGipsImg from '@/assets/img/lj16-minioffice/2-interior-light-junction-gips.jpg?w=600'
import interiorLightJunctionNewImg from '@/assets/img/lj16-minioffice/2-interior-light-junction-new.jpg?w=600'
import interiorLightJunctionOldImg from '@/assets/img/lj16-minioffice/2-interior-light-junction-old.jpg?w=600'
import switchJunctionFlushImg from '@/assets/img/lj16-minioffice/3-switch-junction-flush.jpg?w=600'
import switchJunctionImg from '@/assets/img/lj16-minioffice/3-switch-junction.jpg?w=600'
import switchJunctionNewImg from '@/assets/img/lj16-minioffice/3-switch-junction-new.jpg?w=600'
import switchJunctionNewSwitchImg from '@/assets/img/lj16-minioffice/3-switch-junction-new-switch.jpg?w=600'
import switchJunctionZoomedOutImg from '@/assets/img/lj16-minioffice/3-switch-junction-zoomed-out.jpg?w=600'
import computerOutletExcavatedBroomImg from '@/assets/img/lj16-minioffice/4-computer-outlet-excavated-broom.jpg?w=600'
import computerOutletExcavatedImg from '@/assets/img/lj16-minioffice/4-computer-outlet-excavated.jpg?w=600'
import computerOutletExcavatedSprayerImg from '@/assets/img/lj16-minioffice/4-computer-outlet-excavated-sprayer.jpg?w=600'
import computerBoxGipsImg from '@/assets/img/lj16-minioffice/5-computer-box-gips.jpg?w=600'
import computerBoxPlumbImg from '@/assets/img/lj16-minioffice/5-computer-box-plumb.jpg?w=600'
import computerConduitGipsImg from '@/assets/img/lj16-minioffice/6-computer-conduit-gips.jpg?w=600'
import computerConduitImg from '@/assets/img/lj16-minioffice/6-computer-conduit.jpg?w=600'
import computerOutletCompleteImg from '@/assets/img/lj16-minioffice/6-computer-outlet-complete.jpg?w=600'
import computerOutletLevelImg from '@/assets/img/lj16-minioffice/6-computer-outlet-level.jpg?w=600'
import timberBottomImg from '@/assets/img/lj16-minioffice/7-timber-bottom.jpg?w=600'
import timberBraceImg from '@/assets/img/lj16-minioffice/7-timber-brace.jpg?w=600'
import timberProgressImg from '@/assets/img/lj16-minioffice/7-timber-progress.jpg?w=600'
import timberStartImg from '@/assets/img/lj16-minioffice/7-timber-start.jpg?w=600'

</script>
<template>
  <div class="max-w-5xl py-12">
    <h1 class="text-5xl">MiniOffice at LJ16</h1>

    <SimpleImagePanel
      class="mt-12"
      :reverse="true"
      :imgSrc="originalImg"
      imgAlt="MiniOffice before beginning the project"
      imgCaption="MiniOffice before beginning the project"
      imgClasses="h-60 w-full max-w-sm mx-auto md:h-80 md:max-w-md"
    >
      <p class="max-w-xl">
        <strong class="font-bold">Summary:</strong>
        This page documents building the LJ16 MiniOffice in a former bathroom.
        In hallway.
        Detached from main apartment.
      </p>
    </SimpleImagePanel>

    <h2 class="mt-10 text-4xl text-left">Step 1</h2>

    <SimpleImagePanel
      class="mt-8"
      :reverse="true"
      :imgSrc="originalImg"
      imgAlt="Appearanceof MiniOffice before beginning the project."
      imgCaption="Appearanceof MiniOffice before beginning the project."
      imgClasses="h-64 w-full max-w-md mx-auto md:h-80 object-top"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </SimpleImagePanel>

  </div>
</template>
