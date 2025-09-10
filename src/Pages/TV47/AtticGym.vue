<script setup>
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'

import mattingZupancicevaImg from '@/assets/img/tv47-attic-gym/1-matting-zupanciceva.jpg?w=600'
import emptyAtticImg from '@/assets/img/tv47-attic-gym/2-empty-attic.jpg?w=600'
import slatsDiagonalImg from '@/assets/img/tv47-attic-gym/4-slats-diagonal.jpg?w=600'
import boardsInstalledImg from '@/assets/img/tv47-attic-gym/5-boards-installed.jpg?w=600'
import osbInstalledImg from '@/assets/img/tv47-attic-gym/6-osb-installed.jpg?w=600'
import extensionCornerImg from '@/assets/img/tv47-attic-gym/8-extension-corner.jpg?w=600'
import sleepersCadImg from '@/assets/img/tv47-attic-gym/cad-sleepers.png?w=600'
import osbCadImg from '@/assets/img/tv47-attic-gym/cad-osb.png?w=600'
</script>

<template>
  <div>
    <h1 class="text-5xl">Attic Gym at TV47</h1>

    <SimpleImagePanel
      class="mt-12"
      :reverse="true"
      :imgSrc="boardsInstalledImg"
      imgAlt="The completed sleeper grid for the elastic subfloor."
      imgCaption="The completed sleeper grid for the elastic subfloor."
      imgClasses="h-60 w-full max-w-sm mx-auto md:h-80 md:max-w-md"
    >
      <p class="max-w-xl">
        <strong class="font-bold">Summary:</strong>
        This page documents building an attic gym at our farm at Tolsti Vrh 47.
        I had two principal goals:
      </p>

      <ul class="ml-8 mt-3 list-decimal">
        <li>
          To build an elastic, "bouncy" floor to absorb the impact of weights and plyometric exercises while training
        </li>
        <li>
          To take advantage of the exposed structural posts and beams supporting the timber-framed roof for mounting exercise equipment like pull-up bars, cables, etc.
        </li>
      </ul>

      <p class="mt-3">
        The basic form factor is a 5 m x 5 m square of rubber floor mats placed on a subfloor grid designed for elasticity and impact absorption, with various pull-up bars and climbing accessories mounted to the beams and equipment stored around the perimeter.
      </p>

    </SimpleImagePanel>

    <h2 class="mt-16 text-4xl text-left">Preparation...</h2>

    <SimpleImagePanel
      class="mt-8"
      :reverse="true"
      :imgSrc="mattingZupancicevaImg"
      imgAlt="In the process of reframing the first-floor bathroom with stronger lumber."
      imgCaption="Rubber matting fresh out of the van, stacked outside the basement of my city apartment in Ljubljana, ready to be taken inside for storage."
      imgClasses="h-64 w-full max-w-md mx-auto md:h-80 object-top"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        Fun story: I needed rubber floor mats and found a gym that was unexpectedly relocating and had to sell their practically new rubber floor on short notice.
        Negotiated a good price—on the condition that I take all 100 square meters (far more than needed!) and emptied the place precisely on the evening of their move-out day.
      </p>

      <p class="mt-2">
        So I rented a van for their move-out day, carried the flooring out of the gym up the basement stairs, loaded up the van, and took the load to the basement at my city apartment for storage.
        And that's how I ended up with about 1500 kg of SBR tiles stacked outside my building's basement.
        Turns out there is a good market for used rubber gym mats in Slovenia, and I was fortunately able to sell the excessive for double what I bought it for, so the floor basically paid for itself.
      </p>

      <p class="mt-2">
        Aside: rubber mats are difficult to carry in bulk! SBR rubber is relatively heavy—about 1000 kg per cubic meter, the same density as water—so each 1 m x 1 m x 15 mm tile is 15 kg or so, and floppy. I found the best compromise was to carry two tiles at a time, folded over your head like a hat.
      </p>
    </SimpleImagePanel>


    <SimpleImagePanel
      class="mt-12"
      :reverse="false"
      :imgSrc="emptyAtticImg"
      imgAlt="Empty attic"
      imgCaption="The (mostly) empty attic space where gym will go."
      imgClasses="h-64 w-full max-w-md mx-auto md:h-96 object-top"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        The gym is built on our farm in the countryside on a concrete slab in the attic of the old house.
        We had moved in relatively recently and the attic was still full of clutter—a combination of our unpacked moving boxes, the previous owners' left-behind stuff, and miscellaneous construction waste.
        I spent evenings in the winter clearing clutter out of the attic and sorting through moving boxes while listening to Wayne Gorbea!
        That opened up a nice 30 square meters or so of space for the gym.
      </p>

      <p class="mt-2">You can see a picture of the (almost) emptied attic space <span class="md:hidden">above.</span> <span class="hidden md:inline">on the left.</span> If you squint you miss the large closet lying on its side on the floor, still waiting to be moved downstairs.</p>

    </SimpleImagePanel>

    <h2 class="mt-20 text-4xl text-left">Subfloor technical details</h2>

    <SimpleImagePanel
      class="mt-12"
      :reverse="true"
      :imgSrc="slatsDiagonalImg"
      imgAlt="The bottom layer of the sleeper grid. This was shimmed to level, covered with a perpendicular layer of slats, and then covered with OSB panels."
      imgCaption="The bottom layer of the sleeper grid. This was shimmed to level, covered with a perpendicular layer of slats, and then covered with OSB panels."
      imgClasses="h-64 w-full max-w-md mx-auto md:h-80 object-top"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        The gym floor is a 5 meter by 5 meter square covered in SBR rubber mats placed on a subfloor of OSB panels on a doubled grid of sleepers.
        </p>

        <p class="mt-2">
        The bottom layer of the sleeper grid is recycled from salvaged roofing slats left over from when we re-roofed the barn.
        The slats are roughly 3 mm x 5 mm in cross section and 3-4 meters in length (i.e. less than the 5 meter length/width of the floor) and had to be spliced to reach 5 meters, as shown in the plans below.
        The slats were shimmed to level, then covered with a second layer of perpendicular slats, followed by OSB panels.
      </p>
    </SimpleImagePanel>

    <p class="mt-10">
      Below are the CAD drawings I used to plan the subfloor.
      I used a 625 mm modular dimension to match the standard 625 mm width of OSB panels in the EU, which also divides cleanly into the 5 meter length and width of the floor (8 panels are exactly 5 meters wide).
    </p>

    <div class="flex flex-col lg:flex-row">
      <div class="sm:grid sm:grid-cols-2 space-x-4">
        <img :src="sleepersCadImg" />
        <p class="sm:hidden text-center text-sm text-gray-700">CAD plans for the grid of sleepers, made of two perpendicular layers of slats.</p>

        <img class="mt-5 sm:mt-0" :src="osbCadImg" />
        <p class="sm:hidden text-center text-sm text-gray-700">Layout of the OSB panels placed on top of the sleepers. The joints are staggered for improved strength.</p>

        <p class="hidden sm:block text-center text-sm text-gray-700">CAD plans for the grid of sleepers, made of two perpendicular layers of slats.</p>
        <p class="hidden sm:block text-center text-sm text-gray-700">Layout of the OSB panels placed on top of the sleepers. The joints are staggered for improved strength.</p>
      </div>
    </div>


    <SimpleImagePanel
      class="mt-12"
      :reverse="false"
      :imgSrc="boardsInstalledImg"
      imgAlt="The top layer of the sleeper grid, made of 1 inch thick spruce. OSB panels go on top."
      imgCaption="The top layer of the sleeper grid, made of 1 inch thick spruce. OSB panels go on top."
      imgClasses="h-64 w-full max-w-md mx-auto md:h-80 object-top"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        The second layer of the sleeper grid is made from 1-inch thick spruce planks.
        Again, this is "salvaged" wood: the planks are left over from when we milled wood the previous spring—they were too narrow to be practically useful as siding, but worked well as sleepers to support OSB panels.
      </p>

      <p class="mt-2">
        The planks are placed 625 mm on-center to accommodate the 625 mm wide OSB panels that go on top. (625 mm is the standard modular dimension for many panel products in the EU, analogous to the 16 inch modular dimension used in the USA.)
      </p>

    </SimpleImagePanel>

    <SimpleImagePanel
      class="mt-12"
      :reverse="true"
      :imgSrc="osbInstalledImg"
      imgAlt="OSB subfloor panels — installation complete!"
      imgCaption="OSB subfloor panels — installation complete!"
      imgClasses="h-64 w-full max-w-md mx-auto md:h-80 object-top"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        The top layer of the subfloor is made of OSB panels.
        I used 625 mm x 2500 mm x 22 mm tongue and groove OSB panels.
        The panel joints are staggered for better strength, and the tongues and grooves on the panels help tie the individual panels into a unified planar structure.
      </p>
    </SimpleImagePanel>

    <SimpleImagePanel
      class="mt-12"
      :reverse="false"
      :imgSrc="extensionCornerImg"
      imgAlt="extensionCornerImg"
      imgCaption="In the process of laying the final layer of rubber mats on top of the OSB subfloor."
      imgClasses="h-64 w-full max-w-md mx-auto md:h-80 object-top"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        The final layer is a rubber floor, which provides a shock-absorbent, non-slip surface for training.
        The floor consists of 1 m x 1 m x 15 mm panels made of SBR rubber granules bound in a polyurethane resin.
        The mats are placed on top of the OSB.
        No adhesive was needed—the relatively high coefficient of friction between the mats and subfloor keeps the mats in place.
      </p>
    </SimpleImagePanel>

  </div>
</template>
