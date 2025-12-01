import { PrismaClient, MediaType } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Create dealership (required for FK)
  const dealership = await prisma.dealership.create({
    data: {
      name: "Timeless Motors Málaga",
      slug: "timeless-motors-malaga",
      country: "Spain",
      region: "Andalucía",
      city: "Málaga",
      address: "Avenida Velocidad 911",
      phone: "+34 600 000 000",
      email: "info@timelessmotors.com",
    },
  });

  // Create vehicle
  const vehicle = await prisma.vehicle.create({
    data: {
      dealershipId: dealership.id,

      slug: "porsche-911-gt3",
      brand: "Porsche",
      model: "911 GT3",
      variant: "992",
      year: 2023,

      price: 199000,
      mileageKm: 5500,
      condition: "USED",

      // Marketing
      heroTitle: "Precision Reimagined",
      heroSubtitle: "Born for the Track, Refined for the Road",
      heroTaglineTitle: "Pure Motorsport",
      heroTaglineBody:
        "A naturally aspirated masterpiece engineered to dominate any circuit.",
      heroVideoUrl:
        "/vehicles/porsche-911-gt3/videos/intro.mp4",

      // Highlight stats
      highlight_0_100_s: 3.2,
      highlight_power_kw: 375,
      highlight_power_hp: 510,
      highlight_top_speed: 318,

      // Performance
      powerTotalHp: 510,
      maxSpeedLimitedKmh: 318,
      massDinKg: 1418,

      accel_0_100_s: 3.2,
      accel_0_200_s: 10.8,

      // Engine
      engineConfiguration: "Flat-6 Naturally Aspirated",
      engineArchitecture: "Boxer 4.0L",
      engineDisplacementL: 4.0,
      enginePowerHp: 510,
      engineTorqueNm: 470,
      engineMaxRpm: 9000,

      // Dimensions
      lengthMm: 4573,
      widthMm: 1852,
      widthWithMirrorsMm: 2033,
      heightMm: 1280,
      wheelbaseMm: 2450,

      // Transmission
      transmissionType: "7-Speed PDK",
      elsdDescription:
        "Electronically controlled limited-slip differential",
      eSynchroDescription:
        "Optimized shift logic based on gear prediction",
      transmissionCooling: "Oil-to-water high-efficiency cooling",

      // Generic attributes
      bodyType: "Coupe",
      doors: 2,
      seats: 2,
      driveType: "RWD",
      fuelType: "PETROL",
      exteriorColor: "Shark Blue",
      interiorColor: "Black Leather",
      upholstery: "Alcantara",
      description:
        "The 992 GT3 is the pinnacle of Porsche’s motorsport engineering, offering razor-sharp dynamics, a 9,000 rpm redline, and unmistakable track presence.",
    },
  });

  // Add media files
  await prisma.mediaAsset.createMany({
    data: [
      {
        vehicleId: vehicle.id,
        type: MediaType.IMAGE,
        url: "/vehicles/porsche-911-gt3/img1.jpg",
        alt: "Porsche 911 GT3 hero image",
        isHero: true,
        sortOrder: 0,
      },
      {
        vehicleId: vehicle.id,
        type: MediaType.IMAGE,
        url: "/vehicles/porsche-911-gt3/gallery/01.jpg",
        alt: "Front view",
        sortOrder: 1,
      },
      {
        vehicleId: vehicle.id,
        type: MediaType.IMAGE,
        url: "/vehicles/porsche-911-gt3/gallery/02.jpg",
        alt: "Rear view",
        sortOrder: 2,
      },
      {
        vehicleId: vehicle.id,
        type: MediaType.IMAGE,
        url: "/vehicles/porsche-911-gt3/gallery/03.jpg",
        alt: "Interior",
        sortOrder: 3,
      },
    ],
  });

  console.log("✨ Seed completed! Visit /vehiculos/porsche-911-gt3");
}

main()
  .then(() => prisma.$disconnect())
  .catch((err) => {
    console.error(err);
    prisma.$disconnect();
    process.exit(1);
  });
