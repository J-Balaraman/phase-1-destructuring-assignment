const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const [moo] = farmAnimals.split(' ');
const [,neigh] = farmAnimals.split(' ');
const [,,baa] = farmAnimals.split(' ');
const [,,,oink] = farmAnimals.split(' ');
const [,,,,cluck] = farmAnimals.split(' ');

const [bessie] = farmAnimals.split(' ');
const [,,dolly] = farmAnimals.split(' ');
const [,,,babe] = farmAnimals.split(' ');
const [,,,,little] = farmAnimals.split(' ');

const [blackAndWhite] = farmAnimals.split(' ');
const [,,black] = farmAnimals.split(' ');
const [,,,pink] = farmAnimals.split(' ');

const [red] = colors;
const [,orange] = colors;
const [,,yellow] = colors;
const [,,,green] = colors;
const [,,,,blue] = colors;
const [,,,,,indigo] = colors;
const [,,,,,,violet] = colors;

const [r] = colors;
const [,o] = colors;
const [,,y] = colors;
const [,,,g] = colors;
const [,,,,b] = colors;
const [,,,,,i] = colors;
const [,,,,,,v] = colors;

const [,,,,,indg] = colors;

const {muppetName} = muppet;
const {color} = muppet;
const {song} = muppet;
const {job} = muppet;
const {partner} = muppet;

const song2 = nestedMuppet.album.theMuppetMovie.song2;
const song4 = nestedMuppet.album.theMuppetMovie.song4;
const nestedJob = nestedMuppet.nestedJob;
const nestedPartner = nestedMuppet.nestedPartner;