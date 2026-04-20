/* =====================================================
   LEVEL 1 CONFIG — Pair Matching (15 pairs, 5 lives)
   -----------------------------------------------------
   PUT IN /pictures/Level1/:

   Pair images (each appears twice on the board):
     pair-01.jpg  through  pair-15.jpg   ← your 15 photos

   Penalty image (shown when lives run out → restart):
     penalty.jpg                          ← 1 funny/sad photo

   Collage images (shown together when he wins):
     collage-1.jpg  collage-2.jpg
     collage-3.jpg  collage-4.jpg         ← 4 celebration photos

   Total: 20 images
   ===================================================== */

const LEVEL1_CONFIG = {

  maxLives: 15,  // wrong pairs allowed before penalty screen

  pairs: [
    { image: 'pair-01.jpg', caption: 'worm\'s head, low tide'         },
    { image: 'pair-02.jpg', caption: 'the approach'                    },
    { image: 'pair-03.jpg', caption: 'first belay'                    },
    { image: 'pair-04.jpg', caption: 'somewhere in the tatras'        },
    { image: 'pair-05.jpg', caption: 'rest day'                       },
    { image: 'pair-06.jpg', caption: 'the drive back'                 },
    { image: 'pair-07.jpg', caption: 'this one took a while'          },
    { image: 'pair-08.jpg', caption: 'you, not looking at the camera' },
    { image: 'pair-09.jpg', caption: '3am, worth it'                  },
    { image: 'pair-10.jpg', caption: 'sufficient evidence'            },
    { image: 'pair-11.jpg', caption: 'cannot be explained'            },
    { image: 'pair-12.jpg', caption: 'peak conditions'                },
    { image: 'pair-13.jpg', caption: 'the good one'                   },
    { image: 'pair-14.jpg', caption: 'you know what this is'          },
    { image: 'pair-15.jpg', caption: 'and this one too'               },
  ],

  // Shown when lives hit zero — full restart
  penaltyImage:   'penalty.jpg',
  penaltyMessage: 'Noooo.',
  penaltySub:     'you need to try again.',
  penaltyBtn:     'try again',

  // Shown when all 15 pairs matched — collage of 4 images
  collageImages: [
    'collage-1.jpg',
    'collage-2.jpg',
    'collage-3.jpg',
    'collage-4.jpg',
  ],
  collageMessage: 'OMG.',
  collageSub:     'you are the coolest.',
  collageBtn:     '→ problem 02',
};
