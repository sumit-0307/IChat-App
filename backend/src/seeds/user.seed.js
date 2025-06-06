import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

config();

const plainUsers = [
  // Female Users
  {
    email: "rekha.chikni@example.com",
    fullName: "Rekha Chikni",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-13.jpg"
  },
  {
    email: "sarla.kachori@example.com",
    fullName: "Sarla Kachori",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-1.jpg"
  },
  {
    email: "kamla.biryani@example.com",
    fullName: "Kamla Biryani",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-3.jpg"
  },
  {
    email: "shanti.golgappa@example.com",
    fullName: "Shanti Golgappa",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-22.jpg"
  },
  {
    email: "meena.papdi@example.com",
    fullName: "Meena Papdi",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-25.jpg"
  },
  {
    email: "gudiya.pakwaan@example.com",
    fullName: "Gudiya Pakwaan",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-36.jpg"
  },
  {
    email: "bimla.chaatwali@example.com",
    fullName: "Bimla Chaatwali",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-26.jpg"
  },
  {
    email: "kusum.tandoori@example.com",
    fullName: "Kusum Tandoori",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-19.jpg"
  },

  // Male Users
  {
    email: "ramesh.taklu@example.com",
    fullName: "Ramesh Taklu",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-20.jpg"
  },
  {
    email: "rajesh.chaurasiya@example.com",
    fullName: "Rajesh Chaurasiya",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-21.jpg"
  },
  {
    email: "suresh.dholakia@example.com",
    fullName: "Suresh Dholakia",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-24.jpg"
  },
  {
    email: "mahesh.bhandari@example.com",
    fullName: "Mahesh Bhandari",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-8.jpg"
  },
  {
    email: "naresh.cyclewala@example.com",
    fullName: "Naresh Cyclewala",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-4.jpg"
  },
  {
    email: "jitendra.chikna@example.com",
    fullName: "Jitendra Chikna",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-5.jpg"
  },
  {
    email: "kailash.panwala@example.com",
    fullName: "Kailash Panwala",
    password: "123456",
    profilePic: "https://wallpapers-clan.com/wp-content/uploads/2022/07/funny-cat-12.jpg"
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing users
    // await User.deleteMany({});  Only use this if you want to remove any existing users 

    // Hash passwords
    const seedUsers = await Promise.all(
      plainUsers.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword };
      })
    );

    await User.insertMany(seedUsers);
    console.log("💾 Database seeded successfully with hashed passwords.");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  }
};

seedDatabase();
