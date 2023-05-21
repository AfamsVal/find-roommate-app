-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 20, 2023 at 12:08 PM
-- Server version: 10.3.38-MariaDB-log-cll-lve
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `findeevx_findRoomy`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(250) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `subject` text NOT NULL,
  `message` longtext NOT NULL,
  `reply` mediumtext NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `treated` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `name`, `email`, `subject`, `message`, `reply`, `createdAt`, `treated`) VALUES
(1, 'Afams Val', 'progfams@gmail.com', 'dfd', 'sdfsdfs', '', '2023-01-08 07:59:31', 0),
(2, 'Afams Val', 'progfams@gmail.com', 'lkjsjdf', 'lkjjfdsfsd', '', '2023-01-08 08:31:41', 0),
(3, 'Afams Val', 'progfams@gmail.com', 'How are u', 'I love this message', '', '2023-01-08 08:35:27', 0),
(4, 'Jose', 'jose@autoprensa.com', 'Propuesta Importante', 'Buenas tardes, encantado de saludarte. Soy Jose\\nQuería escribirte porque me ha parecido interesante comentar contigo la posibilidad de que tu negocio aparezca cada mes en periódicos digitales como noticia para posicionar en los primeros lugares de internet, es decir, con artículos reales dentro del periódico que no se marcan como publicidad y que no se borran.\\nLa noticia es publicada por más de cuarenta periódicos de gran autoridad para mejorar el posicionamiento de tu web y la reputación.\\n\\n¿Podrías facilitarme un teléfono para ofrecerte un mes gratuito?\\nGracias', '', '2023-01-29 12:50:54', 0),
(5, 'Jose', 'jose@autoprensa.com', 'Propuesta Importante', 'Buenas tardes, encantado de saludarte. Soy Jose\\nQuería escribirte porque me ha parecido interesante comentar contigo la posibilidad de que tu negocio aparezca cada mes en periódicos digitales como noticia para posicionar en los primeros lugares de internet, es decir, con artículos reales dentro del periódico que no se marcan como publicidad y que no se borran.\\nLa noticia es publicada por más de cuarenta periódicos de gran autoridad para mejorar el posicionamiento de tu web y la reputación.\\n\\n¿Podrías facilitarme un teléfono para ofrecerte un mes gratuito?\\nGracias', '', '2023-03-09 19:04:35', 0);

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` int(250) NOT NULL,
  `address` text NOT NULL,
  `bathRoomNo` varchar(10) NOT NULL,
  `category` varchar(250) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `descriptions` mediumtext NOT NULL,
  `email` varchar(250) NOT NULL,
  `hasTiles` varchar(250) NOT NULL,
  `hasWater` varchar(200) NOT NULL,
  `hostelName` text NOT NULL,
  `houseType` varchar(200) NOT NULL,
  `image` text NOT NULL,
  `isVerified` varchar(10) NOT NULL DEFAULT '0',
  `phone` varchar(15) NOT NULL,
  `rentPerYear` varchar(15) NOT NULL,
  `roomType` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `updatedAt` varchar(250) NOT NULL,
  `toiletNo` varchar(10) NOT NULL,
  `uid` int(250) NOT NULL,
  `university` text NOT NULL,
  `status` int(10) NOT NULL DEFAULT 1,
  `blocked` varchar(10) NOT NULL DEFAULT '0',
  `taken` int(10) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `address`, `bathRoomNo`, `category`, `createdAt`, `descriptions`, `email`, `hasTiles`, `hasWater`, `hostelName`, `houseType`, `image`, `isVerified`, `phone`, `rentPerYear`, `roomType`, `state`, `updatedAt`, `toiletNo`, `uid`, `university`, `status`, `blocked`, `taken`) VALUES
(1, '2b Tichborne Street Leicester', '1', 'roommate', '2022-10-15 06:39:45', 'Steady Power supply ', 'elitism6@gmail.com', 'Yes', 'Yes', 'Victory Lodge', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-835603538istock.jpg', '0', '08140968432', '100000', '1', 'Imo', '1665815985', '1', 1, 'Imo State University', 1, '1', 0),
(2, 'Front gate, imsu', '1', 'room', '2022-10-16 14:19:46', 'You pay 10000 for form\\n\\nAnd for this year is 50000 till December', 'myposhtown@gmail.com', 'Yes', 'Yes', 'Eddy smart', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-512823181665929.jpg', '1', '09155816706', '200000', '0', 'Imo', '1665929986', '1', 5, 'Imo State University', 1, '0', 0),
(3, 'Imo State University', '1', 'room', '2022-10-16 21:44:12', 'You can split the rent with a roommate. Call for inspection.', 'info@findroomy.com', 'Yes', 'Yes', 'Garden city ', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-885116335istock.jpg', '0', '07014858673', '180000', '0', 'Imo', '1665956652', '1', 2, 'Imo State University', 1, '1', 0),
(4, 'Imo State University', '1', 'room', '2022-10-16 21:49:23', 'You can split the rent with a roommate. Call for inspection                                                                                                                     ', 'nfo@findroomy.com', 'Yes', 'Yes', 'Abuja hostel', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-569082488istock.jpg', '0', '07014858673', '140000', '0', 'Imo', '1665956963', '1', 2, 'Imo State University', 1, '1', 0),
(5, 'Front gate alliance ', '1', 'room', '2022-10-17 00:07:37', 'Pay 142 from now till 2024 January \\nThen after 2024 January \\nPay yearly 180k that 90k each\\nSteady water and light(federal light)\\nTight security ', 'michealpromise950@gmail.com', 'Yes', 'Yes', 'Garden city ', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1595181524image.jpg', '1', '08127107764', '180000', '0', 'Imo', '1665965257', '1', 9, 'Imo State University', 1, '0', 0),
(6, 'Bishop court ', '1', 'room', '2022-10-17 10:31:35', 'Federal light \\n', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Victoria hostel ', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-798797304tmp-ca.jpg', '1', '08133513162', '165000', '0', 'Imo', '1666002695', '1', 10, 'Imo State University', 1, '0', 0),
(7, 'Bishop court IMSU', '1', 'room', '2022-10-17 21:17:58', 'Federal light \\nSpacious Room\\nClose to school\\nYou pay 220,000 for a start\\nThen the following year you pay 200k', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Victoria hostel', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1325409961img-2.jpg', '1', '08133513162', '200000', '0', 'Imo', '1666041478', '1', 10, 'Imo State University', 1, '0', 0),
(8, 'Bishop court IMSU', '1', 'room', '2022-10-17 21:21:14', 'Federal light\\nSpacious Room\\nClose to school\\nRunning water\\nTiles \\n\\nYou pay 220,000 for a start and 200,000 the following years', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Victoria hostel', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1211649350img-2.jpg', '1', '08133513162', '220000', '0', 'Imo', '1666041674', '1', 10, 'Imo State University', 1, '0', 0),
(9, 'Bishop court', '1', 'room', '2022-10-17 21:26:51', 'Federal light \\nSpacious Room\\nTiles running water \\n', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Blackberry', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-534105306img-20.jpeg', '1', '08133513162', '160000', '0', 'Imo', '1666042011', '1', 10, 'Imo State University', 1, '0', 0),
(10, 'Bishop court IMSU', '1', 'room', '2022-10-17 21:31:15', 'It has kitchen\\n', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Blackberry lodge', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-212218129img-20.jpg', '1', '08133513162', '160000', '0', 'Imo', '1666042275', '1', 10, 'Imo State University', 1, '0', 0),
(11, 'Front gate Imsu', '1', 'room', '2022-10-17 21:59:08', 'Federal light\\nClose to school', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Abuja hostel', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1015484791img-2.jpg', '1', '08133513162', '140000', '0', 'Imo', '1666043948', '1', 10, 'Imo State University', 1, '0', 0),
(12, 'Front gate Imsu', '1', 'roommate', '2022-10-17 22:34:20', 'Federal light \\nGood road \\nSecurity\\nClose to school\\n', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Victory lodge ', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-144172199tmp-ca.jpg', '2', '08133513162', '150000', '0', 'Imo', '1666046060', '1', 10, 'Imo State University', 1, '0', 0),
(13, 'Front gate hostel', '1', 'room', '2022-10-17 22:47:58', 'Federal light\\nClose to school\\nGood road\\n', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Abuja hostel', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-818159889img-20.jpg', '2', '08133513162', '135000', '0', 'Imo', '1666046878', '1', 10, 'Imo State University', 1, '0', 0),
(14, 'Front gate Imsu', '1', 'room', '2022-10-22 16:07:01', 'State light\\nClose to school\\nSecurity\\nKitchen space \\nSpacious Room', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Emmax', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1353582152img-2.jpg', '1', '08133513162', '135000', '0', 'Imo', '1666454821', '1', 3, 'Imo State University', 1, '0', 1),
(15, 'Front gate Imsu', '1', 'room', '2022-10-22 16:36:18', 'State light\\nSpacious Room\\nKitchen space\\nTiled\\nClose to school\\nSecurity\\nSpacious compound', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Emmax Lodge', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1230346713img-2.jpg', '1', '08133513162', '135000', '0', 'Imo', '1666456578', '1', 3, 'Imo State University', 1, '0', 1),
(16, 'Bishop Court Avenue, Imo State University', '1', 'room', '2022-10-26 19:20:21', 'Heater, Wardrobe, Spacious Kitchen, POP. Fully ensuite with Steady Light, security, and Water. \\n\\nYou can get a roommate to split the rent with.', 'elitism6@gmail.com', 'Yes', 'Yes', 'New Apartment (Bishop Court)', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-543893126whatsa.jpeg', '1', '07014858673', '370000', '0', 'Imo', '1666812021', '1', 2, 'Imo State University', 1, '0', 0),
(17, 'Samek Road IMSU', '1', 'roommate', '2022-10-28 15:57:53', 'I dont have a room I am looking for a roommate. My budget is 80k front gate preferably', 'elitism6@gmail.com', 'Yes', 'Yes', 'Looking For Roommate', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-101758189330622.jpg', '1', '08140968432', '80000', '0', 'Imo', '1666972673', '1', 2, 'Imo State University', 1, '0', 1),
(18, 'Front gate Imsu', '1', 'room', '2022-10-28 22:12:15', 'Female room\\nState light \\nClose to school \\nWardrobe\\nThe bill can still be shared ', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Nicon Hostel', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-613637295img-20.jpeg', '1', '08133513162', '90000', '0', 'Imo', '1666995135', '1', 10, 'Imo State University', 1, '0', 0),
(19, 'Front gate', '1', 'room', '2022-11-03 05:23:00', 'Federal light (anticipated)\\nBig room\\nBalcony\\\\kitchen\\nForm fee 10k\\n', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'House 🏡', 'Bongalow', 'http://www.findroomy.com/routes/uploaded/findroomate-1026183292img-2.jpg', '1', '07014858673', '145000', '0', 'Imo', '1667452980', '1', 3, 'Imo State University', 1, '0', 1),
(20, 'Okwurata IMSU', '1', 'room', '2022-11-03 05:32:31', 'Federal light\\nBalcony kitchen\\nNo Tiles \\n', 'hillarydaniel1404@gmail.com', 'No', 'Yes', 'Okwurata 🏠', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-666284172img-20.jpg', '1', '07014858673', '140000', '0', 'Imo', '1667453551', '1', 3, 'Imo State University', 1, '0', 1),
(21, 'Front gate imsu', '1', 'room', '2022-11-03 05:37:10', 'From now to December 2022 is 50k\\nForm money 10k\\nFederal light \\nClose to school\\nAccessible\\nSecurity\\nGood administration', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'Eddy smart ', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-819848109img-20.jpg', '1', '07014858673', '200000', '0', 'Imo', '1667453830', '1', 3, 'Imo State University', 1, '0', 1),
(22, 'Bishop court ', '1', 'roommate', '2022-11-03 05:42:14', 'For a start 240k \\nFederal light\\nClose to school\\nBig room\\n', 'hillarydaniel140402@gmail.com', 'Yes', 'Yes', 'Victoria lodge ', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1521149319img-2.jpg', '1', '07014858673', '200000', '0', 'Imo', '1667454134', '1', 3, 'Imo State University', 1, '0', 1),
(23, 'Bishops court', '1', 'roommate', '2022-11-04 07:55:03', 'Now we pay 240000(120k each).... Subsequently you pay we pay 180k(90k each)\\nNew hostel\\nKitchen \\nTiles\\nFederal light (steady light)\\nHostel Generator \\n', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'Virtue lodge', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1229472010tmp-c.jpg', '1', '08133968884', '180000', '0', 'Imo', '1667548503', '1', 3, 'Imo State University', 1, '0', 1),
(24, 'Bishop court IMSU ', '3', 'room', '2022-11-10 06:00:50', 'Agent fee 100k \\nFull Wall Tiles \\nSpacious Rooms\\nKitchen \\nSteady light\\nNot student environment\\nSecurity \\nVentilated settings ', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', '2 bedroom flat 002', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-609881172img-20.jpg', '1', '07014858673', '500000', '2', 'Imo', '1668060050', '3', 3, 'Imo State University', 1, '0', 1),
(25, 'Frontgate', '1', 'room', '2022-11-15 07:11:13', 'Federal light \\nClose to school \\nForm 10k \\nKitchen \\nTiles\\n', 'hillarydaniel1404@gmail.co', 'Yes', 'Yes', 'FRONT GATE DB', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-730560136image.jpg', '1', '07014858673', '150000', '0', 'Imo', '1668496273', '1', 50, 'Imo State University', 1, '0', 0),
(26, 'Front gate imsu ', '1', 'room', '2022-11-15 08:00:30', 'Federal light\\nTiled \\nClose to school \\nKitchen space \\nForm money 10k', 'Omegojnr@gmail.com', 'Yes', 'Yes', 'FRONT GATE DB', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-10884105014aead.jpeg', '1', '07014858673', '150000', '0', 'Imo', '1668499230', '1', 50, 'Imo State University', 1, '0', 0),
(27, 'Imo state Owerri ', '1', 'room', '2022-11-19 15:40:52', 'Let it be close to school', 'somto1345@gmail.com', 'Yes', 'Yes', 'Anyone ', '3 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-479480952e389bf.jpg', '0', '08145822766', '150000', '0', 'Imo', '1668872452', '1', 85, 'Imo State University', 1, '3', 1),
(28, 'Okigwe road', '1', 'room', '2022-11-23 01:42:38', 'For a start 335,000 agent fee excluded\\nFully furnished\\nFederal light \\nConducive environment \\nTight security \\nHas Tiles \\nAgent fee excluded', 'hillarydaniel2404@gmail.com', 'Yes', 'Yes', 'VIRGIN HOUSE CD', '3 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-168488608ffbf38.jpeg', '1', '09013643703', '300000', '0', 'Imo', '1669167758', '1', 50, 'Imo State University', 1, '0', 0),
(29, 'Aladinma', '1', 'room', '2022-11-25 12:17:44', 'Federal light\\nSecurity \\nAccessible road\\nRun water\\nKitchen \\nAgent fee excluded\\n', 'Omegojnr@gmail.com', 'No', 'Yes', 'Aladinma ST', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-5240687613f92f6.jpeg', '1', '07014858673', '140000', '0', 'Imo', '1669378664', '1', 50, 'Imo State University', 1, '0', 0),
(30, 'Back gate ', '1', 'roommate', '2022-12-07 15:16:07', 'Steady light and water ', 'chiezuworomemmanuel@gmail.com', 'Yes', 'Yes', 'John Kennedy ', '3 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-581896237painte.jpg', '0', '08058437537', '200000', '0', 'Imo', '1670426167', '1', 20, 'Imo State University', 1, '0', 0),
(31, 'Ikenegbu ', '1', 'roommate', '2022-12-15 17:08:17', 'I need some one who have already gotten a room to share rent with. Budget is 70k. \\nLocation: Ikenegbu \\nChat me on WhatsApp 08183743487', 'judith.chidera@yahoo.com', 'Yes', 'Yes', 'Ikenegbu Owerri ', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1199873566869ae.jpeg', '1', '08183743487', '70000', '0', 'Imo', '1671124097', '1', 118, 'Imo State University', 1, '0', 0),
(32, 'Imo state university owerri', '1', 'roommate', '2022-12-31 08:23:20', 'I need a roommate or person that already have a room', 'estheramarachi543@gmail.com', 'Yes', 'Yes', 'Budget 75k or 80k', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-495307866img-20.jpg', '1', '09066275875', '80000', '0', 'Imo', '1672475000', '1', 105, 'Imo State University', 1, '0', 0),
(33, 'Aladima by merit junction ', '1', 'room', '2023-01-02 10:51:06', 'Form 10k\\n\\nTiles \\nWardrobe\\nKitchen\\nToilet\\nStore\\n\\nRent \\n', 'hillarydaniel140404@gmail.com', 'Yes', 'Yes', 'Aladima f11', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-515319951img-20.jpg', '1', '+23407014858673', '195000', '0', 'Imo', '1672656666', '1', 3, 'Imo State University', 1, '0', 1),
(34, 'Front gate', '1', 'room', '2023-01-02 20:17:38', '❤️', 'patriquegerrard190@gmail.com', 'Yes', 'Yes', 'Front gate', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-846761955e85a12.jpeg', '1', '09035245380', '180000', '0', 'Imo', '1672690658', '1', 136, 'Imo State University', 1, '0', 0),
(35, 'Front gate imsu', '1', 'roommate', '2023-01-03 06:48:05', 'You pay 90k \\nThe room is already furnished\\nI need year 1 student\\nSteady light\\nClose to school ', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'Victory lodge ', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1512417734img-2.jpg', '1', '07014858673', '180000', '0', 'Imo', '1672728485', '1', 3, 'Imo State University', 1, '0', 1),
(36, 'Front gate Imsu ', '1', 'roommate', '2023-01-03 06:56:51', 'Im Juliet 300level \\nI need a roommate (100level) I have a room already it is furnished already\\n', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'Victory lodge ', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1418917796img-2.jpg', '1', '+234 906 387 17', '180000', '0', 'Imo', '1672729011', '1', 3, 'Imo State University', 1, '0', 1),
(37, 'Bishop court IMSU ', '1', 'room', '2023-01-06 13:21:25', 'Kitchen with sink\\nToilet 🚽\\nWardrobe\\nTiles\\nRunning water\\nSpacious Room\\nSecurity\\n', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'Bishop court AK13 ', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-449956679img-20.jpeg', '1', '07014858673', '210000', '0', 'Imo', '1673011285', '1', 3, 'Imo State University', 1, '0', 1),
(38, 'Okwuratta', '1', 'room', '2023-01-18 16:01:27', 'I’m looking for a female roommate, location is at okwuratta . I’m in my finals and the rent is 170k', 'Agbeyeblessing@gmail.com', 'Yes', 'Yes', 'Elmarachi Okwuratta', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-66562374193c405.jpeg', '3', '08183367805', '170000', '0', 'Imo', '1674057687', '1', 181, 'Imo State University', 1, '181', 0),
(39, 'Okwuratta', '1', 'roommate', '2023-01-18 16:05:08', 'I’m looking for a female roommate , location is at okwuratta . I’m in my finals and the rent is 170k', 'Agbeyeblessing@gmail.com', 'Yes', 'Yes', 'Elmarachi okwuratta', '1 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-12154354429df76.jpeg', '1', '08183367805', '170000', '0', 'Imo', '1674057908', '1', 181, 'Imo State University', 1, '0', 0),
(40, 'Works layout ', '1', 'roommate', '2023-02-11 12:01:00', 'Form 10k\\nAgent 5k\\nRunning water \\nSecurity\\n', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'Works layout STK', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-291259891tmp-ca.jpg', '1', '07014858673', '150000', '0', 'Imo', '1676116860', '1', 3, 'Imo State University', 1, '0', 1),
(41, 'Bishop court', '1', 'room', '2023-05-12 17:52:35', 'Security\\nClose to school\\nLight\\nRunning Water \\nKitchen\\nWardrobe\\nTiled\\nSpacious room\\nToilet ', 'hillarydaniel1404@gmail.com the', 'Yes', 'Yes', 'W 11IT', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1309170128img_2.jpg', '1', '+234 701 485 86', '180000', '0', 'Imo', '1683913955', '1', 3, 'Imo State University', 1, '0', 1),
(42, 'Front gate', '1', 'room', '2023-05-12 22:39:12', '240k first time payment\\nClose to school\\nRunning water\\nTiled roads\\nSecurity', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'G11R3', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-469086770img_20.jpg', '1', '07014858673', '200000', '0', 'Imo', '1683931152', '1', 3, 'Imo State University', 1, '0', 0),
(43, 'Bishop court ', '1', 'room', '2023-05-13 17:46:23', 'Form 10k\\nTrackable to school\\nRunning water\\nSteady light\\nSecurity\\n', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'B11L3', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-910365970img_20.jpg', '1', '07014858673', '150000', '0', 'Imo', '1683999983', '1', 3, 'Imo State University', 1, '0', 1),
(44, 'Front gate IMSU', '1', 'room', '2023-05-14 15:40:56', '250k first payment\\nClose to school\\nSecurity\\nNew building\\nRunning water', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'G11S1', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1396966231img_2.jpg', '1', '07014858673', '220000', '0', 'Imo', '1684078856', '1', 3, 'Imo State University', 1, '0', 0),
(45, 'Front gate IMSU ', '1', 'room', '2023-05-14 15:51:06', '240k first payment\\n20k service charge\\nSteady light \\nTiled \\nSecurity\\n', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'G11S02', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-1578943920img_2.jpg', '1', '07014858673', '220000', '0', 'Imo', '1684079466', '1', 3, 'Imo State University', 1, '0', 0),
(46, 'Imsu junction Owerri', '1', 'room', '2023-05-16 13:48:16', '260k first payment.\\nFront gate.\\nIt close to school.\\n', 'hillarydaniel1404@gmail.com', 'Yes', 'Yes', 'Great star', '2 Story Building', 'http://www.findroomy.com/routes/uploaded/findroomate-468346615img_20.jpg', '1', '07014858673', '220000', '0', 'Imo', '1684244896', '1', 3, 'Imo State University', 1, '0', 0);

-- --------------------------------------------------------

--
-- Table structure for table `room_images`
--

CREATE TABLE `room_images` (
  `id` int(250) NOT NULL,
  `url` text NOT NULL,
  `roomID` int(250) NOT NULL,
  `uploadID` varchar(250) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room_images`
--

INSERT INTO `room_images` (`id`, `url`, `roomID`, `uploadID`, `createdAt`) VALUES
(1, 'http://www.findroomy.com/routes/uploaded/findroomate-1595181524image.jpg', 5, '895-0', '2022-10-17 00:07:37'),
(2, 'http://www.findroomy.com/routes/uploaded/findroomate-1347482295image.jpg', 5, '4438-0', '2022-10-17 00:07:37'),
(3, 'http://www.findroomy.com/routes/uploaded/findroomate-406102088image.jpg', 5, '483-0', '2022-10-17 00:07:37'),
(4, 'http://www.findroomy.com/routes/uploaded/findroomate-1524886419image.jpg', 5, '9050-0', '2022-10-17 00:07:37'),
(5, 'http://www.findroomy.com/routes/uploaded/findroomate-1353582152img-2.jpg', 14, '9726-0', '2022-10-22 16:07:01'),
(6, 'http://www.findroomy.com/routes/uploaded/findroomate-223223648img-20.jpg', 14, '386-0', '2022-10-22 16:07:01'),
(7, 'http://www.findroomy.com/routes/uploaded/findroomate-1230346713img-2.jpg', 15, '4639-0', '2022-10-22 16:36:18'),
(8, 'http://www.findroomy.com/routes/uploaded/findroomate-5209805img-2022.jpg', 15, '7096-0', '2022-10-22 16:36:18'),
(9, 'http://www.findroomy.com/routes/uploaded/findroomate-543893126whatsa.jpeg', 16, '2309-0', '2022-10-26 19:20:21'),
(10, 'http://www.findroomy.com/routes/uploaded/findroomate-1447126976whats.jpeg', 16, '503-1', '2022-10-26 19:20:21'),
(11, 'http://www.findroomy.com/routes/uploaded/findroomate-220165849whatsa.jpeg', 16, '7413-2', '2022-10-26 19:20:21'),
(12, 'http://www.findroomy.com/routes/uploaded/findroomate-921246556whatsa.jpeg', 16, '6538-3', '2022-10-26 19:20:21'),
(13, 'http://www.findroomy.com/routes/uploaded/findroomate-947849363whatsa.jpeg', 16, '9197-4', '2022-10-26 19:20:21'),
(14, 'http://www.findroomy.com/routes/uploaded/findroomate-343052049whatsa.jpeg', 16, '2053-5', '2022-10-26 19:20:21'),
(15, 'http://www.findroomy.com/routes/uploaded/findroomate-1026183292img-2.jpg', 19, '5740-0', '2022-11-03 05:23:00'),
(16, 'http://www.findroomy.com/routes/uploaded/findroomate-335000649tmp-ca.jpg', 19, '7416-0', '2022-11-03 05:23:00'),
(17, 'http://www.findroomy.com/routes/uploaded/findroomate-819848109img-20.jpg', 21, '2060-0', '2022-11-03 05:37:10'),
(18, 'http://www.findroomy.com/routes/uploaded/findroomate-1105038445img-2.jpg', 21, '618-0', '2022-11-03 05:37:10'),
(19, 'http://www.findroomy.com/routes/uploaded/findroomate-1521149319img-2.jpg', 22, '663-0', '2022-11-03 05:42:14'),
(20, 'http://www.findroomy.com/routes/uploaded/findroomate-328116580img-20.jpg', 22, '1939-0', '2022-11-03 05:42:14'),
(21, 'http://www.findroomy.com/routes/uploaded/findroomate-609881172img-20.jpg', 24, '5623-0', '2022-11-10 06:00:50'),
(22, 'http://www.findroomy.com/routes/uploaded/findroomate-51763484img-202.jpg', 24, '932-0', '2022-11-10 06:00:50'),
(23, 'http://www.findroomy.com/routes/uploaded/findroomate-636696705img-20.jpg', 24, '1148-0', '2022-11-10 06:00:50'),
(24, 'http://www.findroomy.com/routes/uploaded/findroomate-730560136image.jpg', 25, '3641-0', '2022-11-15 07:11:13'),
(25, 'http://www.findroomy.com/routes/uploaded/findroomate-438071528564643.jpeg', 25, '3992-0', '2022-11-15 07:11:13'),
(26, 'http://www.findroomy.com/routes/uploaded/findroomate-41585570718834e.jpeg', 25, '4224-1', '2022-11-15 07:11:13'),
(27, 'http://www.findroomy.com/routes/uploaded/findroomate-721564734acadb7.jpeg', 25, '3588-2', '2022-11-15 07:11:13'),
(28, 'http://www.findroomy.com/routes/uploaded/findroomate-105561531349a3d.jpeg', 25, '2039-3', '2022-11-15 07:11:13'),
(29, 'http://www.findroomy.com/routes/uploaded/findroomate-1461855289010b4.jpeg', 25, '7727-4', '2022-11-15 07:11:13'),
(30, 'http://www.findroomy.com/routes/uploaded/findroomate-10884105014aead.jpeg', 26, '9147-0', '2022-11-15 08:00:30'),
(31, 'http://www.findroomy.com/routes/uploaded/findroomate-582389514524c23.jpeg', 26, '1397-1', '2022-11-15 08:00:30'),
(32, 'http://www.findroomy.com/routes/uploaded/findroomate-601237019c42480.jpeg', 26, '1193-2', '2022-11-15 08:00:30'),
(33, 'http://www.findroomy.com/routes/uploaded/findroomate-1477479530db332.jpeg', 26, '5791-3', '2022-11-15 08:00:30'),
(34, 'http://www.findroomy.com/routes/uploaded/findroomate-144939499470846.jpeg', 26, '5528-4', '2022-11-15 08:00:30'),
(35, 'http://www.findroomy.com/routes/uploaded/findroomate-1030194597c85e9.jpeg', 26, '4444-5', '2022-11-15 08:00:30'),
(36, 'http://www.findroomy.com/routes/uploaded/findroomate-479480952e389bf.jpg', 27, '6435-0', '2022-11-19 15:40:52'),
(37, 'http://www.findroomy.com/routes/uploaded/findroomate-4286673988b3d92.jpg', 27, '1206-1', '2022-11-19 15:40:52'),
(38, 'http://www.findroomy.com/routes/uploaded/findroomate-19974867435d1c0.jpg', 27, '3518-2', '2022-11-19 15:40:52'),
(39, 'http://www.findroomy.com/routes/uploaded/findroomate-243431637ab41f8.jpg', 27, '6755-3', '2022-11-19 15:40:52'),
(40, 'http://www.findroomy.com/routes/uploaded/findroomate-954792016ce173a.jpg', 27, '5823-4', '2022-11-19 15:40:52'),
(41, 'http://www.findroomy.com/routes/uploaded/findroomate-115275718721b98.jpg', 27, '4886-5', '2022-11-19 15:40:52'),
(42, 'http://www.findroomy.com/routes/uploaded/findroomate-168488608ffbf38.jpeg', 28, '8548-0', '2022-11-23 01:42:38'),
(43, 'http://www.findroomy.com/routes/uploaded/findroomate-11985729992cb42.jpeg', 28, '3984-1', '2022-11-23 01:42:38'),
(44, 'http://www.findroomy.com/routes/uploaded/findroomate-905646096c81237.jpeg', 28, '8006-2', '2022-11-23 01:42:38'),
(45, 'http://www.findroomy.com/routes/uploaded/findroomate-902415953456536.jpeg', 28, '4927-3', '2022-11-23 01:42:38'),
(46, 'http://www.findroomy.com/routes/uploaded/findroomate-924950071909e1e.jpeg', 28, '4545-4', '2022-11-23 01:42:38'),
(47, 'http://www.findroomy.com/routes/uploaded/findroomate-1383012341cce31.jpeg', 28, '7537-5', '2022-11-23 01:42:38'),
(48, 'http://www.findroomy.com/routes/uploaded/findroomate-5240687613f92f6.jpeg', 29, '134-0', '2022-11-25 12:17:44'),
(49, 'http://www.findroomy.com/routes/uploaded/findroomate-10780574697b9d1.jpeg', 29, '6874-1', '2022-11-25 12:17:44'),
(50, 'http://www.findroomy.com/routes/uploaded/findroomate-1589535650ba593.jpeg', 29, '2305-2', '2022-11-25 12:17:44'),
(51, 'http://www.findroomy.com/routes/uploaded/findroomate-504648906f1c352.jpeg', 29, '131-3', '2022-11-25 12:17:44'),
(52, 'http://www.findroomy.com/routes/uploaded/findroomate-515319951img-20.jpg', 33, '7003-0', '2023-01-02 10:51:06'),
(53, 'http://www.findroomy.com/routes/uploaded/findroomate-1374891562img-2.jpg', 33, '4347-1', '2023-01-02 10:51:06'),
(54, 'http://www.findroomy.com/routes/uploaded/findroomate-1591770124img-2.jpg', 33, '9587-2', '2023-01-02 10:51:06'),
(55, 'http://www.findroomy.com/routes/uploaded/findroomate-863571888img-20.jpg', 33, '5371-3', '2023-01-02 10:51:06'),
(56, 'http://www.findroomy.com/routes/uploaded/findroomate-1185423221img-2.jpg', 33, '9206-4', '2023-01-02 10:51:06'),
(57, 'http://www.findroomy.com/routes/uploaded/findroomate-49065080img-202.jpg', 33, '4650-5', '2023-01-02 10:51:06'),
(58, 'http://www.findroomy.com/routes/uploaded/findroomate-1512417734img-2.jpg', 35, '7849-0', '2023-01-03 06:48:05'),
(59, 'http://www.findroomy.com/routes/uploaded/findroomate-399293880img-20.jpg', 35, '7089-0', '2023-01-03 06:48:05'),
(60, 'http://www.findroomy.com/routes/uploaded/findroomate-1559583077img-2.jpg', 35, '7034-0', '2023-01-03 06:48:05'),
(61, 'http://www.findroomy.com/routes/uploaded/findroomate-862054415img-20.jpg', 35, '6233-0', '2023-01-03 06:48:05'),
(62, 'http://www.findroomy.com/routes/uploaded/findroomate-1418917796img-2.jpg', 36, '6143-0', '2023-01-03 06:56:51'),
(63, 'http://www.findroomy.com/routes/uploaded/findroomate-275015040img-20.jpg', 36, '2945-0', '2023-01-03 06:56:51'),
(64, 'http://www.findroomy.com/routes/uploaded/findroomate-449956679img-20.jpeg', 37, '5053-0', '2023-01-06 13:21:25'),
(65, 'http://www.findroomy.com/routes/uploaded/findroomate-89999784img-202.jpeg', 37, '6248-0', '2023-01-06 13:21:25'),
(66, 'http://www.findroomy.com/routes/uploaded/findroomate-1633762172img-2.jpeg', 37, '851-0', '2023-01-06 13:21:25'),
(67, 'http://www.findroomy.com/routes/uploaded/findroomate-712866962img-20.jpeg', 37, '3777-0', '2023-01-06 13:21:25'),
(68, 'http://www.findroomy.com/routes/uploaded/findroomate-291259891tmp-ca.jpg', 40, '3456-0', '2023-02-11 12:01:00'),
(69, 'http://www.findroomy.com/routes/uploaded/findroomate-1503645633img-2.jpg', 40, '5785-0', '2023-02-11 12:01:00'),
(70, 'http://www.findroomy.com/routes/uploaded/findroomate-356521589img-20.jpg', 40, '3828-0', '2023-02-11 12:01:00'),
(71, 'http://www.findroomy.com/routes/uploaded/findroomate-961950425img-20.jpg', 40, '4908-0', '2023-02-11 12:01:00'),
(72, 'http://www.findroomy.com/routes/uploaded/findroomate-1590878311img-2.jpg', 40, '7538-0', '2023-02-11 12:01:00'),
(73, 'http://www.findroomy.com/routes/uploaded/findroomate-1309170128img_2.jpg', 41, '2175-0', '2023-05-12 17:52:35'),
(74, 'http://www.findroomy.com/routes/uploaded/findroomate-1291940246img_2.jpg', 41, '7333-1', '2023-05-12 17:52:35'),
(75, 'http://www.findroomy.com/routes/uploaded/findroomate-851605655img_20.jpg', 41, '5987-2', '2023-05-12 17:52:35'),
(76, 'http://www.findroomy.com/routes/uploaded/findroomate-725107460img_20.jpg', 41, '8725-3', '2023-05-12 17:52:35'),
(77, 'http://www.findroomy.com/routes/uploaded/findroomate-1115519354img_2.jpg', 41, '852-4', '2023-05-12 17:52:35'),
(78, 'http://www.findroomy.com/routes/uploaded/findroomate-786521502img_20.jpg', 41, '5390-5', '2023-05-12 17:52:35'),
(79, 'http://www.findroomy.com/routes/uploaded/findroomate-469086770img_20.jpg', 42, '822-0', '2023-05-12 22:39:12'),
(80, 'http://www.findroomy.com/routes/uploaded/findroomate-407012995img_20.jpg', 42, '6186-1', '2023-05-12 22:39:12'),
(81, 'http://www.findroomy.com/routes/uploaded/findroomate-1668882321img_2.jpg', 42, '6324-2', '2023-05-12 22:39:12'),
(82, 'http://www.findroomy.com/routes/uploaded/findroomate-742709812img_20.jpg', 42, '4266-3', '2023-05-12 22:39:12'),
(83, 'http://www.findroomy.com/routes/uploaded/findroomate-910365970img_20.jpg', 43, '1593-0', '2023-05-13 17:46:23'),
(84, 'http://www.findroomy.com/routes/uploaded/findroomate-897351455img_20.jpg', 43, '8163-1', '2023-05-13 17:46:23'),
(85, 'http://www.findroomy.com/routes/uploaded/findroomate-159952511img_20.jpg', 43, '3957-2', '2023-05-13 17:46:23'),
(86, 'http://www.findroomy.com/routes/uploaded/findroomate-732277335img_20.jpg', 43, '9104-3', '2023-05-13 17:46:23'),
(87, 'http://www.findroomy.com/routes/uploaded/findroomate-518619125img_20.jpg', 43, '9714-4', '2023-05-13 17:46:23'),
(88, 'http://www.findroomy.com/routes/uploaded/findroomate-602225342img_20.jpg', 43, '4116-5', '2023-05-13 17:46:23'),
(89, 'http://www.findroomy.com/routes/uploaded/findroomate-1396966231img_2.jpg', 44, '2441-0', '2023-05-14 15:40:56'),
(90, 'http://www.findroomy.com/routes/uploaded/findroomate-1350201782img_2.jpg', 44, '2347-1', '2023-05-14 15:40:56'),
(91, 'http://www.findroomy.com/routes/uploaded/findroomate-610968706img_20.jpg', 44, '6661-2', '2023-05-14 15:40:56'),
(92, 'http://www.findroomy.com/routes/uploaded/findroomate-1382935063img_2.jpg', 44, '9146-3', '2023-05-14 15:40:56'),
(93, 'http://www.findroomy.com/routes/uploaded/findroomate-908818259img_20.jpg', 44, '7713-4', '2023-05-14 15:40:56'),
(94, 'http://www.findroomy.com/routes/uploaded/findroomate-1578943920img_2.jpg', 45, '3541-0', '2023-05-14 15:51:06'),
(95, 'http://www.findroomy.com/routes/uploaded/findroomate-521410404img_20.jpg', 45, '9858-1', '2023-05-14 15:51:06'),
(96, 'http://www.findroomy.com/routes/uploaded/findroomate-595817964img_20.jpg', 45, '2326-2', '2023-05-14 15:51:06'),
(97, 'http://www.findroomy.com/routes/uploaded/findroomate-676116518img_20.jpg', 45, '8366-3', '2023-05-14 15:51:06'),
(98, 'http://www.findroomy.com/routes/uploaded/findroomate-1369754856img_2.jpg', 45, '2946-4', '2023-05-14 15:51:06'),
(99, 'http://www.findroomy.com/routes/uploaded/findroomate-495935423img_20.jpg', 45, '6497-5', '2023-05-14 15:51:06'),
(100, 'http://www.findroomy.com/routes/uploaded/findroomate-468346615img_20.jpg', 46, '8667-0', '2023-05-16 13:48:16'),
(101, 'http://www.findroomy.com/routes/uploaded/findroomate-447981925img_20.jpg', 46, '3429-1', '2023-05-16 13:48:16'),
(102, 'http://www.findroomy.com/routes/uploaded/findroomate-654055806img_20.jpg', 46, '1073-2', '2023-05-16 13:48:16');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(250) NOT NULL,
  `firstName` varchar(200) NOT NULL,
  `lastName` varchar(200) NOT NULL,
  `email` varchar(250) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `profileURL` text DEFAULT NULL,
  `state` varchar(20) NOT NULL,
  `gender` varchar(15) NOT NULL,
  `password` text NOT NULL,
  `blocked` int(20) NOT NULL DEFAULT 0,
  `code` varchar(250) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `admin` int(20) NOT NULL DEFAULT 0,
  `inValidPwdCount` int(10) NOT NULL DEFAULT 0,
  `inValidPwdTimer` varchar(250) NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `phone`, `profileURL`, `state`, `gender`, `password`, `blocked`, `code`, `createdAt`, `admin`, `inValidPwdCount`, `inValidPwdTimer`, `status`) VALUES
(1, 'Val', 'Afams', 'myceet1@gmail.com', '08037514469', 'http://www.findroomy.com/routes/uploaded/findroomate-1386427524val.jpeg', 'Anambra', 'Male', '$2y$10$PV9uw4PCjTxRrS3qgfz.GuOPl0YBnJn.itNK0XB7.PBHtx7a5YE3a', 0, '', '2022-10-12 23:00:05', 1, 0, '', '0'),
(2, 'Chigozie', 'Okala', 'elitism6@gmail.com', '08140968432', 'http://www.findroomy.com/routes/uploaded/findroomate-394374993103485.jpg', 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-15 06:58:10', 1, 1, '1669916291', '0'),
(3, 'Hillary', 'Daniel', 'hillarydaniel1404@gmail.com', '07014858673', 'http://www.findroomy.com/routes/uploaded/findroomate-727948448IMG-20.jpg', 'Imo', 'Male', '$2y$10$acJmEb4UVNLLqtb/DFKenOaDkaBDOw15oZO/e6iUpP./YNSRE4KrO', 0, '', '2022-10-15 08:36:23', 1, 0, '', '0'),
(4, 'Sylvester', 'Greygory', 'sylvacraig@gmail.com', '08140968432', 'http://www.findroomy.com/routes/uploaded/findroomate-402688916Screen.png', 'Imo', 'Male', '$2y$10$j39en93ZT7K9VPhsONKCuewgDr7LWHTJMgocCEny4JY7mGzhpo8W6', 0, '', '2022-10-16 13:59:16', 0, 0, '', '0'),
(5, 'Joseph', 'Chukwuma', 'myposhtown@gmail.com', '09155816706', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-16 14:14:57', 0, 0, '', '0'),
(6, 'Chidube', 'Stephen', 'udezestephen012@gmail.com', '08164907313', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-16 18:18:39', 0, 0, '', '0'),
(7, 'Assumpta ', 'Eze', 'assumgold@gmail.com', '08065379916', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-16 18:42:39', 0, 0, '', '0'),
(8, 'Chukwuemeka', 'Clinton', 'dialaclinton152@gmail.com', '09137360096', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-16 20:20:59', 0, 0, '', '0'),
(9, 'Micheal ', 'Promise ', 'michealpromise950@gmail.com', '08127107764', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-17 00:00:38', 0, 0, '', '0'),
(10, 'Hillary', 'Chidalu', 'hillarydaniel140402@gmail.com', '08133513162', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-17 10:09:40', 0, 1, '1666995665', '0'),
(11, 'Eberechukwu', 'Ojoko', 'ojokoebere1@gmail.com', '08137177968', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-17 14:49:05', 0, 0, '', '0'),
(12, 'Star boy ', 'Wussy ', 'Wizzyyyy@gmail.com', '08076720224', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-17 16:47:04', 0, 0, '', '0'),
(13, 'Kingson ', 'Uba ', 'kingsonuba7@gmail.oom', '08076720224', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-17 16:58:44', 0, 0, '', '0'),
(14, 'Chukwuemeka ', 'Chidera ', 'chukwuemekachidera60@gmail.com', '+234 9153219549', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-17 17:17:13', 0, 0, '', '0'),
(15, 'Favour', 'Ahamefule', 'ahamefulefavour123@gmail.com', '08168810050', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-17 18:16:05', 0, 0, '', '0'),
(16, 'Ijeoma ', 'Onuoha ', 'ijeomaonuoha45@gmail.com', '08027995270', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, 'P9348', '2022-10-18 07:21:18', 0, 1, '1681158537', '0'),
(17, 'Onyedikachi ', 'Joshua ', 'onyedikachijoshua3@gmail.com', '08021286374', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-18 10:05:50', 0, 0, '', '0'),
(18, 'Ebubechukwu', 'Emmanuella', 'emmanuellaebubechukwu9@gmail.com', '07034337392', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-18 10:20:01', 0, 0, '', '0'),
(19, 'Ekeanyanwu ', 'Shiloh ', 'ekeshiloh@gmail.com', 'ekeshiloh@gmail', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, 'D2182', '2022-10-18 10:55:50', 0, 2, '1684433627', '0'),
(20, 'Emmanuel', 'Awuzie', 'chiezuworomemmanuel@gmail.com', '08058437537', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, 'E8439', '2022-10-18 11:12:32', 0, 1, '1673121725', '0'),
(21, 'Caleb', 'Sp', 'Julianaalves2232@gmail.com', '08099788666', NULL, 'Kogi', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-22 01:56:56', 0, 0, '', '0'),
(22, 'Nnadozie ', 'Peter ', 'dtwinsmusic2020@gmail.com', '07031475679', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-22 11:40:31', 0, 0, '', '0'),
(23, 'Iheanyi', 'Onye', 'flavouriheanyi1999@gmail.com', '08084214116', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-24 04:10:03', 0, 0, '', '0'),
(24, 'Paul', 'Melody', 'Paulmelody663@gmail.com', '08100576940', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-24 08:41:13', 0, 0, '', '0'),
(25, 'Chiamaka', 'Victory ', 'Emmanuelamy12@gmail.com', '090', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-24 08:49:50', 0, 0, '', '0'),
(26, 'Chiamaka ', 'Avida ', 'Vivianchiamaka572@gmail.com', '08068601188', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-24 11:06:45', 0, 0, '', '0'),
(27, 'Chiamaka ', 'Avida', 'Vivianchiamaka573@gmail.com', '08068601188', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-24 11:15:13', 0, 0, '', '0'),
(28, 'francis', 'alamezie', 'Frankjerry313@gmail.com', '08096872520', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-24 17:11:00', 0, 0, '', '0'),
(29, 'Silas', 'Marvis', 'silasmarvis123@gmail.com', '07044029540', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-25 10:06:04', 0, 0, '', '0'),
(30, 'TINA', 'OBINNA', 'theodoretina6@gmail.com', 'theodoretina6@g', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, 'C5582', '2022-10-25 19:53:56', 0, 1, '1667417014', '0'),
(31, 'Yope', 'Light', 'promisechidozie4901@gmail.com', '08080785459', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-25 20:53:52', 0, 0, '', '0'),
(32, 'Chidiebube ', 'Ifejiagwa ', 'ifejiagwaebube@gmail.com', '08146131950', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-26 01:09:30', 0, 1, '1674186412', '0'),
(33, 'Banks ', 'Clinton', 'banksclinton91@gmail.com', '09095386259', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, 'V2701', '2022-10-26 16:36:18', 0, 4, '1674649768', '0'),
(34, 'Godbless', 'Isibor', 'godblessisibor1999@gmail.com', '09033894133', NULL, 'Edo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-26 21:09:51', 0, 0, '', '0'),
(35, 'Alexandria ', 'Gold', 'blessingama539@gmail.com', '08029461056', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-27 08:56:42', 0, 0, '', '0'),
(36, 'AKUM', 'Daniel Uchechukwu', 'dakum291@yahoo.com', '09134258967', NULL, 'Imo', 'Male', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-29 18:55:55', 0, 0, '', '0'),
(37, 'Sylva', 'John', 'mandy.sam@hotmail.com', '0817774992', NULL, 'Imo', 'Female', '$2y$10$DE91W1IShe9QN66bh7C.FeXeDVPj91UUmRzCajAcKmKX.FKPdnOum', 0, '', '2022-10-30 20:13:46', 0, 2, '1667455260', '0'),
(38, 'Winifred', 'Ihenile', 'Winifredihenile@gmail.com', '08104251273', NULL, 'Imo', 'Female', '$2y$10$Az3iIh2WoxK5yX3Ya0vLvuws8zys/EPa6sBqSnx6ONtMT4dgIqyva', 0, '', '2022-11-02 06:29:17', 0, 0, '', '0'),
(39, 'Precious ', 'Louise ', 'Louisepresh76@gmail.com', '09131083025', NULL, 'Imo', 'Female', '$2y$10$c12V/IIIvRQaGNM36459MOJN0U6XWGgsMU8fGDImNtqlLAd2KJcA6', 0, '', '2022-11-02 10:34:29', 0, 0, '', '0'),
(40, 'Prince ', 'Ezekwem', 'ezekwemprince3@gmail.com', '08103679465', NULL, 'Imo', 'Male', '$2y$10$.cwNVoHcMO4.3cpjKBcaxeW6fXEXebjLr2e2ngC2IFhU7xUGKgYqe', 0, '', '2022-11-02 12:23:17', 0, 0, '', '0'),
(41, 'Tory', 'Ghost', 'graciashk10@gmail.com', '08060985870', NULL, 'Imo', 'Male', '$2y$10$Ykrl4upGwXimBIJROG/MguiBMk1TIM8HPa4uk7eEutZCeFXtThWxO', 0, 'B0315', '2022-11-02 12:23:28', 0, 0, '', '0'),
(42, 'Princess', 'Favour', 'Princessfavour2003@gmail.com', '07046305119', NULL, 'Imo', 'Female', '$2y$10$Fc2DkrRFkOBCaehNww6Z3.u9aslGSWiGSfuGtU/2DE6DkW5oKMqNC', 0, '', '2022-11-02 13:50:23', 0, 0, '', '0'),
(43, 'Uroegbulam', 'Blessing', 'Chinaza4excellence1234@gmail.com', '+234 708 642 95', NULL, 'Imo', 'Female', '$2y$10$FcUaqXPDievPztoAa9C7nePbe2B5TJWxGv4k1VZR0kF25N4RxR.TO', 0, '', '2022-11-03 17:28:46', 0, 0, '', '0'),
(44, 'Nneji', 'Vera', 'oziomavera879@gmail.com', '08133968884', NULL, 'Imo', 'Female', '$2y$10$DGM1tCLncEAh7zYtuagqyeqhNeM5Fl5DMjv8vVTEnSKIm77v8SWNm', 0, '', '2022-11-04 07:46:16', 0, 0, '', '0'),
(45, 'Timmy', 'Bankz', 'Timmybankz12@gmail.com', '08139375235', NULL, 'Imo', 'Male', '$2y$10$2KAxA4wH8n0UC5BxgMwuv.6qJx3t9FGjbdxBQl2lqYvtPENMGfw6W', 0, '', '2022-11-04 15:39:48', 0, 0, '', '0'),
(46, 'Rasaq ', 'Hassan ', 'nonsom553@gmail.com', '09162228403', NULL, 'Imo', 'Male', '$2y$10$UBb6asg.TewaAep0N7.K/uG2YERr57UZe4dLP9VW6Skqjlyg8B2Zy', 0, '', '2022-11-05 04:21:25', 0, 0, '', '0'),
(47, 'Kingsley ', 'Chukwuebuka ', 'ifeanyikingsley615@gmail.com', '0813357971', NULL, 'Imo', 'Male', '$2y$10$MuJy58d6hxaU28vJKff1U.jQHXcxZ92iPZNvNwI07k78I0E/6bTti', 0, '', '2022-11-06 00:08:39', 0, 0, '', '0'),
(48, 'Chukwubuike', 'Amobi', 'amobichukwubuike2018@gmail.com', '07061382972', NULL, 'Anambra', 'Male', '$2y$10$kpmfhA6vDm.lKMlnVoJJmezEnh/6agMTERYxridYYjaZogsUxOlJi', 0, '', '2022-11-06 17:15:06', 0, 0, '', '0'),
(49, 'Favour', 'nwoke', 'nwokefavourchidera@gmail.com', '08175215395', NULL, 'Imo', 'Female', '$2y$10$gx.ylZCi79nblXiPdk2tJ.OWeUSbsStVcL3hHu2ZiWL7UkVlApCQe', 0, '', '2022-11-07 19:06:26', 0, 0, '', '0'),
(50, 'Origbo', 'Ubanozie ', 'Omegojnr@gmail.com', '09013643703', 'http://www.findroomy.com/routes/uploaded/findroomate-162691793394EED.jpeg', 'Imo', 'Male', '$2y$10$RnptEMjfRW62yfJh/Asmw.uhiGsWK94teKzFjzMouPKWrbXpsJK6e', 0, '', '2022-11-07 23:02:54', 0, 0, '', '0'),
(51, 'Ekeledirichukwu', 'Prosper ', 'ekeledirichukwu2003@gmail.com ', '08148932313', 'http://www.findroomy.com/routes/uploaded/findroomate-949453927inboun.jpg', 'Imo', 'Male', '$2y$10$WZydSirMVxS6cnRU.dK/cOcu8pMfAequzp3ttc79x6hITK9ffBmIi', 0, '', '2022-11-08 08:50:32', 0, 0, '', '0'),
(52, 'Peace ', 'Mirabel', 'Mirabelpeace@gmail.com', '08139414294', NULL, 'others', 'Female', '$2y$10$bpZuISQcRVkYygNaXs7TMOM.mjyLApQ2R5sby5p60BTTUpMt3Lm5m', 0, '', '2022-11-08 15:17:21', 0, 0, '', '0'),
(53, 'Dominion.', 'Nicholas', 'Dominionnicholas4@gmail.com', '07031147549', NULL, 'Imo', 'Male', '$2y$10$uygnetcuKCFzmcdqPds95Oh3zhjOBO3d5sR4p8WCtL9uEpeUMQSOa', 0, 'E5469', '2022-11-08 21:07:42', 0, 0, '', '0'),
(54, 'Miracle', 'Great', 'greattrillz@gmail.com ', '09031156503', NULL, 'Imo', 'Male', '$2y$10$ukVZrNz6wyYlr8OeMgqTwe/snJexOaJuY0lgIBUOaO8RxdN2MVlRe', 0, '', '2022-11-08 22:09:10', 0, 0, '', '0'),
(55, 'Ogochukwu', 'Adim', 'omamelody8@gmail.com', '08079640352', NULL, 'Imo', 'Female', '$2y$10$u72KSDxR21clJyWjWniFSeGRP9h6F8s5T1KTkTCVq7U2JhH/1dW.C', 0, 'R3378', '2022-11-09 15:21:57', 0, 0, '', '0'),
(56, 'Ogochukwu', 'Adim', 'ogochukwumelody8@gmail.com', '07084115597', NULL, 'Imo', 'Female', '$2y$10$Qk7Smt43a8Eed7hiBXMo2usJTJg.xGXu98pTCYfauTh1PADGr..lW', 0, '', '2022-11-09 15:27:07', 0, 0, '', '0'),
(57, 'Dominion ', 'Collins', 'collinsdominion8@gmail.com', '08140120126', NULL, 'Imo', 'Male', '$2y$10$HUApb/QsEqFFkCQyDbjAluvAKOxlIPJpu6ETxjQxJz/r/VbT84XZy', 0, '', '2022-11-09 15:29:19', 0, 0, '', '0'),
(58, 'Ogochukwu', 'Melody', 'akwukworb@yahoo.com', '09034130725', NULL, 'Imo', 'Female', '$2y$10$sB9tWnq7hUqi5CK9.8QHUOQHhf3sdMIjcJCxpFG/2CkedY71VtOO2', 0, '', '2022-11-09 16:53:13', 0, 1, '1668012955', '0'),
(59, 'Melody', 'Ogochukwu', 'benbooks2233@gmail.com', '09034130725', NULL, 'Imo', 'Female', '$2y$10$RtsXCiGJyA5iJq9MH0eg6OGNf7AEmj5RNCgf0IbBjaWRqprDCx86C', 0, '', '2022-11-09 16:54:34', 0, 0, '', '0'),
(60, 'Elsie', 'Umunnakwe', 'elsie10303@gmail.com', '07011543070', NULL, 'Imo', 'Female', '$2y$10$NApgtaDDJFJ/DKAHAhzWR.eh3qU9sPMX3VmLeyA4RLiu19e8smoXG', 0, '', '2022-11-10 20:10:33', 0, 0, '', '0'),
(61, 'Osigwe Grace', 'Akachi', 'osigwegrace06@gmail.com', '09033145642', NULL, 'Imo', 'Female', '$2y$10$HqEP7BWqlGW2qRuM9/OPzep48PsZbCQ/S7xtfQVFCjNPaglIMHl8O', 0, '', '2022-11-11 09:07:23', 0, 0, '', '0'),
(62, 'Chibuike', 'Amobi', 'benjamincindy25@gmail.com', '0805 742 1716', NULL, 'Anambra', 'Male', '$2y$10$uA9tKBizGCt3ab5PkY8Hb.HmswsxaOQJDDiCOjMQOq9HkhUQWZ//.', 0, '', '2022-11-11 17:51:17', 0, 0, '', '0'),
(63, 'Dominion.', 'Nicholas ', 'nicholasdominion928@gmail.com', '07031147549', NULL, 'Imo', 'Male', '$2y$10$zgIcsroBVGHm6OwMEL4faeR6TX82jIbvTidJWhOI82ye0jmhFZOn2', 0, '', '2022-11-11 21:27:30', 0, 0, '', '0'),
(64, 'Audrey ', 'Martin ', 'glorymartin698@gmail.com', '09075916158', NULL, 'Imo', 'Female', '$2y$10$Xvs3.BrDNHbJOixCS.eG7uqxOFb5oA3o/QPqdjlCZ5LXcxOGYGqnq', 0, '', '2022-11-12 15:12:49', 0, 0, '', '0'),
(65, 'Onyinye ', 'Janey', 'onyinyeadims@gmail.com', '09061236856', NULL, 'Imo', 'Female', '$2y$10$Mv7dEhr28KpR4pwkWIlb9.Bq8I.4bt3i.DTTpKgTy1W06VnpaT0v.', 0, '', '2022-11-13 00:27:02', 0, 0, '', '0'),
(66, 'Onyinye ', 'Janey', 'alexkmzy@gmail.com', '09061236856', NULL, 'Imo', 'Female', '$2y$10$hKazCpwBfO1hwpyqr8.eG.iS53Z1MkBeUSGJB.K/lkA/UM.3bEOW.', 0, '', '2022-11-13 00:28:06', 0, 0, '', '0'),
(67, 'Delight', 'Peters', 'amadiamarachi001@gmail.com', '08151223910', NULL, 'Imo', 'Male', '$2y$10$0oLLiHwvDA2POnxXn2rAhuD8GxRoL4Wuy2OSkvd1TsGiS1yvcIpuW', 0, '', '2022-11-13 11:13:09', 0, 0, '', '0'),
(68, 'Tedy', 'T', 'tedypinky2000@gmail.com', '09037421987', NULL, 'Imo', 'Female', '$2y$10$LVjDIwhaZ4Ws81x5sKwUROrb2DJO1arWMUxLaVMMdyzA/Nn.2Um7W', 0, '', '2022-11-13 21:55:22', 0, 0, '', '0'),
(69, 'Gift', 'Okechukwu', 'okechukwugift342@gmail.com', '09067844255', NULL, 'Imo', 'Female', '$2y$10$Ashd8kymYtRpgH61ad8dReaVoaerBc8ph2uNgEVIWQDg/mXqJk7Ki', 0, '', '2022-11-14 14:33:52', 0, 1, '1668712781', '0'),
(70, 'Sunshine', 'Daisy', 'Sunshinedaisy@gmail.com', '07012183111', NULL, 'Imo', 'Female', '$2y$10$dUX4her.QRzwO2HqBw5BbetC9FBWQfPLBoddEFF1I3NxpwIcTdc2G', 0, '', '2022-11-14 15:05:58', 0, 0, '', '0'),
(71, ' Ozioma ', 'Anyanwu ', 'anyanwuzm@gmail.com ', '08144117675', NULL, 'Imo', 'Male', '$2y$10$UfTeY8vBZph1gVSa1IAwQ.0XSZOv2vLEx20jitbmKu3OMKm7mVFzq', 0, '', '2022-11-14 16:17:39', 0, 0, '', '0'),
(72, 'Iyke ', 'Blazzy ', 'Ikechukwublessing056@gmail.com ', '08164722251', NULL, 'Imo', 'Female', '$2y$10$f406WS8rJ5bFgULASwACXOK/9bLgKhazQPlydFfXKBdxxFxVkJVn.', 0, '', '2022-11-15 08:19:38', 0, 0, '', '0'),
(73, 'Chimoma', 'Judith', 'Judithchimoma101@yahoo.com', '08131269505', NULL, 'Imo', 'Female', '$2y$10$A0q17C2lXDkhK1S.jOq5CeCo.nobPRKm0uvglyekMhEy78381dAXm', 0, '', '2022-11-15 09:41:12', 0, 0, '', '0'),
(74, 'Chimoma', 'Judith', 'Judithchimoma101@gmail.com', '08131269505', NULL, 'Imo', 'Female', '$2y$10$HvVkJ7/CPwijDL5Bzi3ksu68YhZR5q1evh8iAQAWCol60D7RGTT7u', 0, '', '2022-11-15 09:41:44', 0, 0, '', '0'),
(75, 'Mbanu ', 'Prey', 'Ugobaby1998@gmail.com', '08132014900', NULL, 'Imo', 'Female', '$2y$10$mgzD22O0Ab0cjGYe3HrIj.zqXiN/uj13MnpSkhVZCKwQNNhUn0uMq', 0, '', '2022-11-17 06:08:52', 0, 0, '', '0'),
(76, 'Cheta', 'Ohanenye', 'chetaohanenye@gmail.com', '+2348163518246', 'http://www.findroomy.com/routes/uploaded/findroomate-1269027282B612_.jpg', 'Imo', 'Male', '$2y$10$QNBIADWWrnPt0BM4L7hIS.5qCZYgPrHe7CrOj.HWU4JosKiXse7K.', 0, '', '2022-11-17 12:48:00', 0, 0, '', '0'),
(77, 'Deborah', 'James', 'iamdebbyjames@gmail.com', '08094407023', NULL, 'Imo', 'Female', '$2y$10$U47H3r7QlG32NLx8PH3mf.GLQvZ/ejyDZl5/g/srOIZhPTR.nzM1G', 0, '', '2022-11-17 12:51:48', 0, 0, '', '0'),
(78, 'Matthew ', 'Success ', 'Matthewsuccess1234@gmail.com', '08093792836', 'http://www.findroomy.com/routes/uploaded/findroomate-661070035IMG_20.jpg', 'Imo', 'Male', '$2y$10$ZPzAjL25LPuIrThdJdQFh.h6XG3R/nnlUjFdbC9vaZ0jbaKc4W172', 0, '', '2022-11-17 13:14:21', 0, 0, '', '0'),
(79, 'Chinedum', 'Eva', 'oshieeverestus71@gmail.com', '+2347043082682', NULL, 'Imo', 'Male', '$2y$10$IKwDkfsVGh9bnExPvry4EeKOQTXSg68eIiESDG1Z2hhip9NXwyldu', 0, '', '2022-11-17 13:44:50', 0, 0, '', '0'),
(80, 'Chioma', 'Nnaji', 'giftchioma183@gmail.com', '08089265707', NULL, 'Imo', 'Female', '$2y$10$JfbdHgS6SL3RL3rk.y1TYuLexvaZ3AiJgb5xfh08fSLsf0AP.qgty', 0, '', '2022-11-17 15:34:09', 0, 0, '', '0'),
(81, 'Franklyn', 'Okeke', 'Frankelly344@gmail.com', '+2348176507344', NULL, 'Imo', 'Male', '$2y$10$oQjJTwejN26GUSvDNd97Nu6HdBihRdasLyNrdsyECu6QB0ddDsz9i', 0, '', '2022-11-18 07:16:33', 0, 0, '', '0'),
(82, 'Zucci ', 'Daniel', 'zuccizucci555@gmail.com', '09067580896', NULL, 'Imo', 'Male', '$2y$10$TKaxuXKZaja2HVL9E52eV.bm43.i13Ko6F8XN.5cjOH9cU39OT6De', 0, '', '2022-11-18 08:04:45', 0, 0, '', '0'),
(83, 'Oparaure ', 'Delight ', 'uchedelight362@gmail.com', '09060318075', NULL, 'Imo', 'Male', '$2y$10$D/Prapf1CwKJIWDFHmdvBeWFj/.3CHMy0.fWhcIZLz.XfxDducVTy', 0, '', '2022-11-18 13:44:11', 0, 1, '1668779253', '0'),
(84, 'Ruth', 'Ozioma', 'akawugoruth29@gmail.com', '08163733212', NULL, 'Imo', 'Female', '$2y$10$yTBG3zUObGXWWmnLEGvYY.y5/tAhhn46BhXsYuZ3eDAHNU954y/iu', 0, '', '2022-11-19 15:08:41', 0, 0, '', '0'),
(85, 'Ihenagwam ', 'Chidera ', 'somto134.@gmail.com', '08145822766', 'http://www.findroomy.com/routes/uploaded/findroomate-1452581619Snapc.jpg', 'Imo', 'Female', '$2y$10$df6vOuOCDYFq4L7qJTCDHO3f1fjhs77ugn/35/s92k150tM3shP8.', 0, '', '2022-11-19 15:35:02', 0, 0, '', '0'),
(86, 'Emmanuel ', 'Ifeanyi ', 'Akwariemmanuel0669@gmail.com', '09019096706', NULL, 'Imo', 'Male', '$2y$10$yItZsHtyhFOSv2O0WeS1ZeTI2y0RLClGuESXqokdUeK4AnMczH6G6', 0, '', '2022-11-20 11:00:58', 0, 0, '', '0'),
(87, 'Unigwe', 'Henry', 'henryunigwe7@gmail.com', '07026738536', NULL, 'Imo', 'Male', '$2y$10$bodkjvN6BUXDPiSFhfuQZer4lD/sB0K7EjOfqh8WNMI67XWN5n.4C', 0, '', '2022-11-20 14:23:48', 0, 0, '', '0'),
(88, 'Ejimadu ', 'Izuchukwu ', 'victorejimadu95@gmail.com', '08143770699', 'http://www.findroomy.com/routes/uploaded/findroomate-1255058030IMG-2.jpg', 'Imo', 'Male', '$2y$10$h8P8EBHl8YbwM.w7U3uxL.fpoxAZ22m0fF.7KR94jELOQ4onsN8X6', 0, '', '2022-11-20 15:49:53', 0, 0, '', '0'),
(89, 'Ifeanyi ', 'Mgbemere ', 'mgbemere3@gmail.com', '09066594859', NULL, 'Imo', 'Male', '$2y$10$IEm6dottUN9qVDwpoj1Bu.15LPDW/TSokPyoyHLQupbVcBJ/FukdS', 0, '', '2022-11-21 06:30:55', 0, 0, '', '0'),
(90, 'Tovia', 'Harrison ', 'harrisontovia03@gmail.com', '09128054503', NULL, 'Imo', 'Female', '$2y$10$tBHAgWTczeDyEbDfa2TvyOz9Dqay604oMeBNfy/XiXIuph4gqbVMW', 0, '', '2022-11-22 08:38:51', 0, 0, '', '0'),
(91, 'Morgan', 'Osigwe', 'Osigweathanasius@gmail.com', '08137689371', NULL, 'Anambra', 'Male', '$2y$10$.JPp7Nqx5KFJ7QiHTBEo..bkHf3wzI6E6Ph0zttvRP.CUszftwZwO', 0, '', '2022-11-23 10:46:20', 0, 0, '', '0'),
(92, 'Eronini Maryevangeline ', 'Chinaza ', 'nazaevangel7@gmail.com ', '07036282938', NULL, 'Imo', 'Female', '$2y$10$l7fQ0T14Ay6kq2ENkOL9aeKDCprlicq2gS3/QSlNBZbYXBUZRprCW', 0, '', '2022-11-24 09:17:44', 0, 0, '', '0'),
(93, 'Ekeh precious ', 'Oluomachi', 'ekehp46@gmail.com', '08098060090', NULL, 'Imo', 'Female', '$2y$10$WUtLQvfSScaCDIhsQwGDvu2LWBWgOW1JfIBH02bmsXp4SMXuZpxla', 0, '', '2022-11-24 13:02:35', 0, 0, '', '0'),
(94, 'Jane', 'Chris', 'janechris480@gmail.com', '09010287563', NULL, 'Imo', 'Female', '$2y$10$vC/9NB6s2FD0/DHu3Hp3Be5axU.b2V.ShQfGQpqHuvD.EHGVHcGLy', 0, '', '2022-11-24 13:37:42', 0, 0, '', '0'),
(95, 'Ugo', 'Chika', 'ugochika20@gmail.com', '09065620830', NULL, 'Imo', 'Female', '$2y$10$Ba//Kk.gIykTfzJUHNWwbumfvTtMsWHlD9dAxBjgSfaCLgv6iSAn.', 0, '', '2022-11-25 06:23:13', 0, 0, '', '0'),
(96, 'Chisom', 'Maureen ', 'Chisommaureen67@gmail.com', '07085276676', 'http://www.findroomy.com/routes/uploaded/findroomate-1447503849720A0.jpeg', 'Imo', 'Female', '$2y$10$JAOy6peVbstJTldGSu3r9uBXsDoWQSRfoMJy0Z4LPnBlVArrRfh6a', 0, '', '2022-11-25 09:35:40', 0, 0, '', '0'),
(97, 'Racheal', 'Nwamaziogbu', 'Chukwuracheal67@gmail.com', '07010216559', NULL, 'Imo', 'Female', '$2y$10$qbTSn4UDnxBnEq651vX6xefEBSctB1TdE8ngIcbO1/WKaPRCAWwmm', 0, '', '2022-11-25 10:02:20', 0, 0, '', '0'),
(98, 'Glory', 'Ukwuoma', 'Ukwuomaglory@gmail.com', '08143182850', NULL, 'Imo', 'Female', '$2y$10$cuo5BE7hZjlctiEKB0GKJOY8dzK4BQKWBWhD4rXAYyVp6RSzGM1sa', 0, '', '2022-11-26 18:43:38', 0, 0, '', '0'),
(99, 'Chiny', 'Chuks', 'chinychuks14@gmail.com', '09 129 6692 14', NULL, 'Imo', 'Female', '$2y$10$6FRwhK.XBTyRqVBFheV3ZOAiAb78un76HimzmKYV.I2GEz5RLXp.C', 0, '', '2022-11-27 05:04:24', 0, 0, '', '0'),
(100, 'Chiamaka', 'Uzor', 'uzorchiamaka667@gmail.com', '07061389145', NULL, 'Imo', 'Female', '$2y$10$UGe9TS6jNUlmeU0R5liViuNZk0Q9HIhQfTldX2WMOfqxQJTUPIZQe', 0, '', '2022-11-27 18:42:11', 0, 0, '', '0'),
(101, 'Chinenye', 'Nwaiwu', 'theenenye247@gmail.com', '08166244341', NULL, 'Imo', 'Female', '$2y$10$Jes9sg27uQI2Z5deB/hKD.4tzOHwfmbW94Kp8cln6d/fPhgM/m7ji', 0, '', '2022-11-29 10:12:58', 0, 0, '', '0'),
(102, 'Wisdom ', 'Onyeike ', 'imsulegit@gmail.com', '9023219124', NULL, 'Imo', 'Male', '$2y$10$7OzsVe3Y4FwZoEu81Uw8U.4HPDKk1Sn62WLGCXUJKWT2hy6xN9wBW', 0, '', '2022-11-29 11:06:27', 0, 1, '1669720259', '0'),
(103, 'Frank ', 'Adioha ', 'frankadioha@gmail.com', '08128418735', NULL, 'Imo', 'Female', '$2y$10$qi1wufV5hZYu2DAw7yTq6.uK.KSv64rQEIdG..BYOSmFsJMPnRwKi', 0, '', '2022-11-29 14:29:33', 0, 0, '', '0'),
(104, 'Destiny ', 'Awuzie', 'destinychukwunenye@gmail.com', '08141341821', NULL, 'Imo', 'Female', '$2y$10$g1gtzzpPBXfQP9pfkr4w0.jbiGMR.1kYljr4GRLt3VL/xxV7VcZwK', 0, '', '2022-11-30 10:34:52', 0, 0, '', '0'),
(105, 'Esther', 'Chelsea', 'estheramarachi543@gmail.com', '09066275875', 'http://www.findroomy.com/routes/uploaded/findroomate-952956936IMG_20.jpg', 'Imo', 'Female', '$2y$10$vHTR3rDx6opR1CIM7x1/TeNrd6GKn587bgR7sUA.rd/mv7Pdao6Gm', 0, '', '2022-11-30 17:14:30', 0, 0, '', '0'),
(106, 'Nkwocha ', 'Ngozi', 'nrah04234@gmail.com', '09034271204', NULL, 'Imo', 'Female', '$2y$10$.L4VUpDYYnWiI1HJKP2qEO53gcVL9lzNkyIDpbZuRqu7NarbxZeAW', 0, '', '2022-12-01 12:10:55', 0, 1, '1669896812', '0'),
(107, 'Nkwocha', 'Suzzyann', 'nrah04234@gail.com', '09034271204', NULL, 'Imo', 'Female', '$2y$10$WA.XlQqcVtwXmyZDgjt.neoTqUESWYBOBXMgoC1sfvY.Uz7b3qY5y', 0, '', '2022-12-01 12:15:52', 0, 0, '', '0'),
(108, 'Victor ', 'Amaechi ', 'amaechialexander01@gmail.com', 'amaechialexande', NULL, 'Imo', 'Male', '$2y$10$oHY2lmcNQwkH44aKfh5R0.LtWh8Ww34BSQKmnicW8hnXy0sPuwgYq', 0, '', '2022-12-01 16:17:17', 0, 0, '', '0'),
(109, 'Odeme ', 'Bliss', 'Blissodeme@gmail.com', '08027781859', NULL, 'Imo', 'Female', '$2y$10$08BCtrYEoSgTITHS4V3G6u9jhZ/jjY1eparFV18azK1NNl/E7INWq', 0, '', '2022-12-02 13:38:00', 0, 0, '', '0'),
(110, 'Precious', 'Uzoagba', 'domnicprecious372@gmail.com', '09033291716', 'http://www.findroomy.com/routes/uploaded/findroomate-67363550838208C.jpeg', 'Imo', 'Female', '$2y$10$OlzSnfo2MtBfSjBIBF5coe8HC2pD4wldS6Rjx3Uc/28OqOP2eDF6O', 0, '', '2022-12-02 19:46:18', 0, 0, '', '0'),
(111, 'Joy', 'Firstlady ', 'betterdaysanasomba@gmail.com', '09132690096', 'http://www.findroomy.com/routes/uploaded/findroomate-1381864361IMG_2.jpg', 'Imo', 'Female', '$2y$10$BuFiJvC/lxSA.9eVyUPg4uvpzD.vjI4GREpB9nBdSW3C.hnEyJ7U2', 0, '', '2022-12-05 20:06:39', 0, 0, '', '0'),
(112, 'PÖCAM ', 'Madu', 'prospermadu1117@gmail.com', '07046684310', NULL, 'Imo', 'Male', '$2y$10$01T0mOmJTQdlRxOz378FIONLlVwy.ki0bW778oLbDo1gwjwg6elRa', 0, '', '2022-12-07 07:10:09', 0, 0, '', '0'),
(113, 'Egemba', 'Lilian', 'egembalily@gmail.com', '07067625379', NULL, 'Imo', 'Female', '$2y$10$EZ5lnnIOUaRVhIFmjC8She2tC0EY8JFJ6DInI3iMdyI0yoHGsvYei', 0, '', '2022-12-07 20:21:07', 0, 0, '', '0'),
(114, 'Nneoma', 'Gina', 'Nneomaginax@gmail.com', '09073490962', NULL, 'Imo', 'Female', '$2y$10$cFSFuL2t11VTeHNq/CGBUeVIiHXPJGL4dZTGaMq2NMFsZ.erHweLO', 0, '', '2022-12-09 13:21:01', 0, 0, '', '0'),
(115, 'Skyb', 'goodness', 'goodnessijezie22@gmail.com', '08124251451', NULL, 'Imo', 'Female', '$2y$10$dzYJOYUHLzM6480Z8yPcEuVd8osJ01h5XTPrYdxRWTCDv6peDdQO.', 0, '', '2022-12-10 12:16:00', 0, 1, '1670674680', '0'),
(116, 'Peace ', 'Ejimadu ', 'peaceejimadu2020@gmail.com', '+2327065699097', NULL, 'Imo', 'Female', '$2y$10$Go3XchI3B5/adoCZdBEi..B89sXcZ07sWlFTlYE7ndzUM3RdKLleW', 0, '', '2022-12-12 11:50:10', 0, 0, '', '0'),
(117, 'Martins', 'Opara', 'martinsopara53@gmail.com', '07015828625', NULL, 'Imo', 'Male', '$2y$10$/RRlKh2hirZffM9SvLrjheTbYIfIfWNNI/DpCOe5niniir/sWWVQ6', 0, '', '2022-12-13 12:46:48', 0, 0, '', '0'),
(118, 'Chidera', 'Judith ', 'judith.chidera@yahoo.com', '08183743487', 'http://www.findroomy.com/routes/uploaded/findroomate-200328570459BE2.jpeg', 'Imo', 'Female', '$2y$10$6V/n1BT0GP8LPmfP96xGyuEZ1pwEj/dIP8ayEVrdEssiCXry.tohC', 0, '', '2022-12-15 16:52:16', 0, 0, '', '0'),
(119, 'Ebuka', 'Nwaeze', 'Ebukanwaeze2020@gmail.com', '07012656567', NULL, 'Imo', 'Male', '$2y$10$uFL2cY9V9hEh0eVI1rckEOaz/.lGWUVHHHH45g8dJgO/bhCK4I.wC', 0, '', '2022-12-17 15:25:40', 0, 0, '', '0'),
(120, 'Chris ', 'Diligent ', 'chrisdiligent077@gmail.com', '09063983934', 'http://www.findroomy.com/routes/uploaded/findroomate-145306981710000.jpg', 'Imo', 'Male', '$2y$10$Hxa66pOjV1WS.ItWo8pgDuPejjo3eLtCK8k.jqMdjXSS7Wu4iTXlq', 0, '', '2022-12-17 20:04:39', 0, 0, '', '0'),
(121, 'Chiagoziem ', 'Charles ', 'testimonychiagoziem@gmail.com', '08109265016', NULL, 'Imo', 'Male', '$2y$10$KbyoUSO1jAqVqzUSDTAdvOIiSKvrDP3vbgohkdakzGubZz0NgjywC', 0, '', '2022-12-19 15:06:00', 0, 0, '', '0'),
(122, 'Augustine', 'Ezenwajiaku', 'iamceeayyvino@gmail.com', '08120420730', NULL, 'Imo', 'Male', '$2y$10$uT7jHEI6XyCGWo1KaWxO3O3XAJowJ/JOT4Y3zhvNa3nm4wVRqfUIq', 0, '', '2022-12-19 15:15:18', 0, 0, '', '0'),
(123, 'Simeon', 'Onyedikachi ', 'ekehsimeon95@gmail.com', '09038425779', NULL, 'Imo', 'Male', '$2y$10$qq2RSgnFy1Q0TTpbT26rxuIhtSRAx5.U/q85qhCSnFGYtmJmPqDZW', 0, '', '2022-12-19 19:35:17', 0, 0, '', '0'),
(124, 'Okereafor', 'Chiamaka', 'estherchiamaka525@gmail.com', '08130156647', NULL, 'Imo', 'Female', '$2y$10$5ngx42ylT2DZaITtRu6.TeDqhkpzT62iVTnq4I81.y6ZF/UWHSI6W', 0, '', '2022-12-19 19:45:20', 0, 0, '', '0'),
(125, 'Annastesia', 'Onwuepe', 'blitzes.sudsier.0n@icloud.com', '09074008633', NULL, 'Imo', 'Female', '$2y$10$7TQz3sjTAW2qQUYXf/WujehuL5hmFT.EzBQmJtBT3VviOYkAXWVzS', 0, '', '2022-12-19 19:51:45', 0, 0, '', '0'),
(126, 'Mmesomachukwu', 'Agubama', 'maryannchina402@gmail.com', '09024802816', NULL, 'Imo', 'Female', '$2y$10$wtRlZ0ec7kQET8FQIvi5g.ilQ/WkrslMTsDrPuTApJGbG3968Le4y', 0, '', '2022-12-21 08:01:12', 0, 0, '', '0'),
(127, 'Genevieve ', 'Anujuom', 'genevivea96@gmail.com', '08125802636', NULL, 'Imo', 'Female', '$2y$10$qdyKbfXjLr/MOHcs2RejkOy2QbjYo0F8CrpxZDPphBL/0X2Dog2eC', 0, '', '2022-12-21 18:36:42', 0, 0, '', '0'),
(128, 'Pope', 'Fundz', 'Popefundz01@gmail.com', '09014641562', NULL, 'Imo', 'Male', '$2y$10$QCunX5lCRuj4GCOlmYR4auQYU9b3JOXICaVbmyTowaYe5B5Cleg2W', 0, '', '2022-12-24 20:13:24', 0, 0, '', '0'),
(129, 'ireka', 'chidera', 'irekachidera@gmail.com', '07046506965', NULL, 'Imo', 'Male', '$2y$10$9Pte6u1eQiCl1HK4LjI4Wus1aAi/YkIrXuN9jAkVJqG9.4NYiUk6O', 0, '', '2022-12-25 07:56:55', 0, 0, '', '0'),
(130, 'Kenneth', 'Nnadi', 'kennethnnadi@yahoo.com', '08037523584', NULL, 'Imo', 'Male', '$2y$10$ybI7AQIJJPQn19pPS8oD0eXjSsLMxuBhuYhYnQgi9o1cpqoPIb3yK', 0, '', '2022-12-26 10:07:01', 0, 0, '', '0'),
(131, 'Faith', 'Oge', 'Foge2020@gmail.com', '09137732652', NULL, 'Imo', 'Female', '$2y$10$BzNB16E9zjQLG6bBhAnC8e8nlPg9UrVUYleea1Kja2rYGxmo8Qp8.', 0, '', '2022-12-27 14:14:28', 0, 0, '', '0'),
(132, 'Juliet', 'Paul', 'qwinjuliet001@gmail.com', '09157084204', NULL, 'Imo', 'Female', '$2y$10$GU8IfzzZlBM3inYidP1BiOCrHRrHtyU5S0REStfmVNAQydlGC0rjS', 0, '', '2022-12-30 16:26:29', 0, 0, '', '0'),
(133, 'Mbanaso', 'Chisom', 'mbanasoblessing031@gmail.com', '09036323191', 'http://www.findroomy.com/routes/uploaded/findroomate-1172831605IMG_2.jpg', 'Imo', 'Female', '$2y$10$ZYIFOlQCyyMD55bAbbUupOgcaqck1CRygTPvZoYAPFi8EyUf2CAUm', 0, '', '2023-01-01 00:17:43', 0, 0, '', '0'),
(134, 'Uzor', 'Chioma', 'Uzorchioma069@gmail.com', '09070865640', NULL, 'Imo', 'Female', '$2y$10$vEbsfmTNoRVtl49ZA/Sz7uHnfjXX/gK4443kHPmK0QUHlXWV3xioq', 0, '', '2023-01-02 10:32:53', 0, 0, '', '0'),
(135, 'Victory', 'Chidera', 'ekechukwuvictory@gmail.com', '08132889041', NULL, 'Imo', 'Female', '$2y$10$GwNQaOTEy3t9Sq0Pxt19k.maBKuZ42qdGbNmTAEU7MHDKgxYUUA6u', 0, '', '2023-01-02 19:08:44', 0, 0, '', '0'),
(136, 'Patrique', 'Gerrard', 'Patriquegerrard190@gmail.com', '09035245380', 'http://www.findroomy.com/routes/uploaded/findroomate-1160081856CA90B.jpeg', 'Imo', 'Male', '$2y$10$Fjbp0143wiz9S52oMnMtTu6lbulEsXKDbwD/UIB3moHPnbWYrwnCK', 0, '', '2023-01-02 20:09:50', 0, 0, '', '0'),
(137, 'Diamond', 'Ice', 'Chinomsojohnkennedy@gmail.com', '07043641466', NULL, 'Imo', 'Male', '$2y$10$wIpz872sxT1/94e2mYwOGuvUV0bVonJ07iSUfAL2Ll8VR1ib/bzsO', 0, '', '2023-01-03 08:04:19', 0, 0, '', '0'),
(138, 'Precious', 'Ogechi', 'precious156nwa@gmail.com', '07085060256', NULL, 'Imo', 'Female', '$2y$10$F./wfbupDfHA5bDpNXYD/.lBYAiI1EkzfdxQk0wSayCXl8xUxYD7S', 0, '', '2023-01-03 08:29:46', 0, 1, '1674233331', '0'),
(139, 'IGBOKWE ', 'Chioma ', 'igbokwechiomaclara46@gmail.com', '07010944846', NULL, 'Imo', 'Female', '$2y$10$995CLviacGNXS7Lao5ifKuwEOuy/RZsiYdwTNHUF/1ZVjr4r/ApOe', 0, '', '2023-01-03 12:04:35', 0, 1, '1672747639', '0'),
(140, 'Uzor', 'Chioma', 'Uzorchioma069@gmali.com', '09070865640', NULL, 'Imo', 'Female', '$2y$10$aLTbfN245m/ZZX2TzSc2f.9eOL5OtvWJj2M8gCxex8ShrsptzR0Ae', 0, '', '2023-01-03 13:35:42', 0, 0, '', '0'),
(141, 'Christiana', 'Ezeh', 'Christyifyezeh02@gmail.com', '08155200364', NULL, 'Imo', 'Female', '$2y$10$/so0uRZOP2rjMHa56Ag5x.xobJaF5OIGbGEV8KUZnHvWL8h4UypMi', 0, '', '2023-01-03 16:13:32', 0, 0, '', '0'),
(142, 'Christiana', 'Ezeh', 'Christyifyezeh01@gmail.com', '08155200364', NULL, 'Imo', 'Female', '$2y$10$xKutGCO7DrmGxFcD17BajONW7ASQCiRt6ZkrzwjcQYqVD5i0txbXy', 0, '', '2023-01-03 16:14:09', 0, 0, '', '0'),
(143, 'Clinton ', 'Okafor ', 'ugochukwuokafor2017@gmail.com', '08077614446', 'http://www.findroomy.com/routes/uploaded/findroomate-115072839823470.jpg', 'Imo', 'Male', '$2y$10$T3aNTQY5WKUSxTFHly8VFufV5YOGgPRW2sz0mX2rOQrAwmPVOJycO', 0, '', '2023-01-03 19:40:36', 0, 0, '', '0'),
(144, 'Cisco', 'Xx', 'Ralphchane@gmail.com', '09067172153', NULL, 'Imo', 'Female', '$2y$10$GZfcGuiIKwxycvA4O4KCdOTa4/i7aYMWRL.F5w7yXjqgy4ieyHKt6', 0, '', '2023-01-04 10:06:57', 0, 0, '', '0'),
(145, 'Justin ', 'Ndubuisi ', 'nwaabafabio@gmail.com', '07025595142', NULL, 'Imo', 'Male', '$2y$10$8zyhens6Lagq1DJcrkJqt.qobb9/v3jaEm/UohLL8BRYmpQNXVNw6', 0, '', '2023-01-04 14:49:59', 0, 0, '', '0'),
(146, 'Iwu', 'Chinaza Godson-Kennedy', 'iwugodsonkennedy77@gmail.com', '08139479567', NULL, 'Imo', 'Male', '$2y$10$XAsoASF5jL7BXdt.oRIk..jrrf7pX4YjbAAO0MdN1yGiC9Byw7A.m', 0, '', '2023-01-05 06:35:20', 0, 0, '', '0'),
(147, 'Augusta', 'Uzere-Ojimadu', 'augustaadannaya@gmail.com', '+2347069210209', NULL, 'Imo', 'Female', '$2y$10$SURjgR5YXzFr.veYnFxZUerdDM0uMR9/Y66zUhAgmpvbgxUYpohGu', 0, '', '2023-01-05 19:32:41', 0, 0, '', '0'),
(148, 'Nelson ', 'Anthony ', 'nelsonanthony554@gmail.com', '08052532021', NULL, 'Imo', 'Male', '$2y$10$ac4Yc7HH2Q32E4L3IRlgRu/L7ESLVJhsYX/LU7706bBkHQvmYKhMm', 0, '', '2023-01-06 01:40:41', 0, 0, '', '0'),
(149, 'vivian', 'iwu', 'vivianiwu@gmail.com', '08140192585', NULL, 'Imo', 'Female', '$2y$10$zySBAX/oZ0cxCXhivAgCxOJ8dpf5Vw6sFYju.A5LNn/EjJ1WpK7k6', 0, '', '2023-01-06 08:53:09', 0, 0, '', '0'),
(150, 'Uwandu ', 'Emmanuella ', 'ellysquash@gmail.com', '08061448202', NULL, 'Imo', 'Female', '$2y$10$h0ja0Iss6zY.U1n/axPbtuA.LS6cR0vO46.KYnnhzNpT5hgaPV6E6', 0, '', '2023-01-06 10:17:23', 0, 0, '', '0'),
(151, 'Michelle ', 'Rufus', 'Favourrufus2019@gmail.com', '09064449553', NULL, 'Imo', 'Female', '$2y$10$nW6W3cLkDWQUZF2pDZN4R.djBKzTZWcrVwDelqwMG8BduhUlKrEY6', 0, '', '2023-01-06 10:35:35', 0, 0, '', '0'),
(152, 'Jasmine X', 'Eze', 'addaezee557@gmail.com', '07012386078', NULL, 'Imo', 'Female', '$2y$10$tIoLf7Wc1Tn3dFumA.toeO.efxHgJjKz8tXVlUvzZF.NnLl7NkjgK', 0, '', '2023-01-06 10:56:11', 0, 0, '', '0'),
(153, 'Ikechukwu', 'Prince', 'ikechukwuprince027@gmail.com', '09010031095', NULL, 'Imo', 'Male', '$2y$10$ggkeLuV4wnMni4ymhzzqVeN2j.iUan1bx62ROxyI4mEk1EkNAh7qW', 0, '', '2023-01-06 14:31:02', 0, 0, '', '0'),
(154, 'Anthony', 'EJIOGU', 'ejiogua@gmail.com', '08107080343', NULL, 'Imo', 'Male', '$2y$10$WYdKuOV5tbPSLZKJmKib.e6CLX9JyxCXnHHQtFds7r87FiJpAjPIy', 0, '', '2023-01-06 15:05:43', 0, 0, '', '0'),
(155, 'Doreen ', 'Christian ', 'Doreenchris19@gmail.com', '08155715885', NULL, 'Imo', 'Female', '$2y$10$0/Gz/KYjfX41ApunJVSnZuMmGBZat0j9wL/P0LgNYO5QmZP/P.TOO', 0, '', '2023-01-06 21:59:31', 0, 0, '', '0'),
(156, 'Chisom', 'Pauline', 'chisompauline2020@gmail.com', '07063563691', NULL, 'Imo', 'Female', '$2y$10$M8QqEpn9g02yPvjvahNnzOoRVHhacbvIi2HOAosOuhwMVPzCdPMPa', 0, '', '2023-01-07 08:24:56', 0, 0, '', '0'),
(157, 'ALEX ', 'LOVETH ', 'lovethdestiny05@gmail.com', '08112147077', NULL, 'Imo', 'Female', '$2y$10$CHTADxahJB89j0v/4JZFpux3T2PLpzlr.rUIFx2WuWliqvUTQM.1e', 0, '', '2023-01-07 11:56:04', 0, 0, '', '0'),
(158, 'Uche', 'Venat', 'anyaguuche@gmail.com', '07066592609', NULL, 'Imo', 'Male', '$2y$10$cSgIsjcIrL4nRsnPP/kfDecnHAqdDOjWDjjNV3BayrWxFFXNm1rli', 0, '', '2023-01-07 12:46:02', 0, 0, '', '0'),
(159, 'Joy ', 'Onuoha ', 'joychinemerem762@gmail.com', '09161527192', NULL, 'Imo', 'Female', '$2y$10$zO3KiVIn/9e.R7nvnbq5j.eUSVWXodlZBjyNzXCtTHUHiF7mpD5ui', 0, '', '2023-01-07 13:25:07', 0, 0, '', '0'),
(160, 'Duru', 'Solo', 'durusolo13@gmail.com', '08139957258', NULL, 'Imo', 'Male', '$2y$10$fgftJehEPs7Vyj0UDwebJ.xsUQHIallFiizRad/66T0R2uqHTJkvu', 0, '', '2023-01-07 13:50:09', 0, 0, '', '0'),
(161, 'Stephanie ', 'Ugochukwu ', 'stephachidera83@gmail.com', '08103544416', NULL, 'Enugu', 'Female', '$2y$10$JnFWTm/iQO2UPEPOeh2VCOQJ/PPm5hKb5F0FKOZLNNwsMjCjMj/Oe', 0, '', '2023-01-07 13:55:13', 0, 0, '', '0'),
(162, 'Jane ', 'Nwankire ', 'amkyjane20@gmail.com', '07062744869', NULL, 'Imo', 'Female', '$2y$10$QgmbUDJi.aYNWznY5EQQI.BXAyhE//BX9louvWrWxFkd.JD8oNiO.', 0, '', '2023-01-07 14:10:29', 0, 0, '', '0'),
(163, 'Chidera', 'Christopher ', 'christochidera01@gmail.com', '+2349038293436', NULL, 'Imo', 'Female', '$2y$10$HJ6KhihBZecjvGc4CFcFy.KcPWYk5hl94VJJ1MDJ3cQ2Lsd/C3NO6', 0, '', '2023-01-07 15:43:19', 0, 0, '', '0'),
(164, 'Henry', 'Ogu', 'obihenryk@gmail.com', '08126026803', NULL, 'Imo', 'Male', '$2y$10$z6ghnx9BGZ2/mAQA7jZkVehT.tImCbJ6iEihMYIn0IC0i.0qFV8oW', 0, '', '2023-01-07 15:47:38', 0, 1, '1673106575', '0'),
(165, 'Chidera', 'Noëlla', 'chideranoella@gmail.com', '07065059367', 'http://www.findroomy.com/routes/uploaded/findroomate-960927131202111.jpg', 'Imo', 'Female', '$2y$10$EZqYtER78HyPooXKs2/jDeK4vQKKq0ZP7l6wzgkO9u.7AeE.lJwyu', 0, '', '2023-01-07 15:50:22', 0, 0, '', '0'),
(166, 'Onyinyechi immaculeta', 'Otuosorochukwu', 'onyinyechiimmaculeta18@gmail.com', '09030299055', 'http://www.findroomy.com/routes/uploaded/findroomate-699706098167182.jpg', 'Imo', 'Female', '$2y$10$8vWz3ZmqHUCRUSdMoZ1YXeZL6NZHxRPJx0PYjojbvRcQqDX645Vqe', 0, '', '2023-01-07 19:20:40', 0, 0, '', '0'),
(167, 'Emmanuel', 'Awuzie', 'emmanuelawuzie72@gmail.com ', '08058437537', NULL, 'Imo', 'Male', '$2y$10$vQ1uFU7N4cfHpDRa.suUquQnzvEztzmrFFLDDNrZOem5/6/sTMjsG', 0, '', '2023-01-07 19:34:49', 0, 0, '', '0'),
(168, 'Esther', 'onyekuru', 'onyekuruesther@gmail.com', '09032319970', NULL, 'Imo', 'Female', '$2y$10$sWs5XuoyWSWDSvH9q.bLXOPWUx9m3esDZtovnXsCf48TKpKuol5/m', 0, '', '2023-01-07 21:22:52', 0, 0, '', '0'),
(169, 'Chukwuemeka ', 'Okwudiri', 'Cchukwuemeka750@gmail.com ', '+234 907-600-87', 'http://www.findroomy.com/routes/uploaded/findroomate-153745400Screen.jpg', 'Imo', 'Male', '$2y$10$cRrk2mWGExVcxCl9eGwKI.rufzp05amMIqIsOMFaPxw93pY8bZZSi', 0, '', '2023-01-08 08:06:30', 0, 0, '', '0'),
(170, 'Faith', 'Ogbusu', 'Faithogbusu8@gamil.com', '08164171890', NULL, 'Imo', 'Female', '$2y$10$h305R4oMmtdlGm/f1F/Oa.yPlRk.4bq/E.Xc6z8klggvHLreMDx7O', 0, '', '2023-01-08 18:21:36', 0, 0, '', '0'),
(171, 'Faith', 'Ogbusu', 'Ogbusufaith8@gmail.com', '08164171890', NULL, 'Imo', 'Female', '$2y$10$1GFQlCplebZvW.JGLvZFR.ubCCzz.sAgldCzp5IVfsQ5L9fTdVJ3G', 0, '', '2023-01-08 18:48:03', 0, 0, '', '0'),
(172, 'Isikaku maryann ', 'Adaobi ', 'anniegold39@gmail.com', '08166346485', NULL, 'Imo', 'Female', '$2y$10$tV5l3DVxz/o/AkMceGj3Z.ix3/p2lcsn1rXUfZnlEGcRtRD8RMtZq', 0, '', '2023-01-10 05:42:34', 0, 0, '', '0'),
(173, 'Precious', 'Ibe', 'ibeprecious27@gmail.com', '07066061864', NULL, 'Imo', 'Female', '$2y$10$SRPoqXR2QiwoDBCH9zJf0eaB94wjwnxwJrowyrOTcT8xfTwpMSueG', 0, '', '2023-01-10 15:59:27', 0, 0, '', '0'),
(174, 'Chioma ', 'Onu', 'bucanajoeh@gmail.com', '09026202624', NULL, 'Imo', 'Female', '$2y$10$2EQl9f3BZegrXGeQGlFsSe8bMGomMZCDtVRP3otJYZMV0DFIyzSpK', 0, '', '2023-01-11 19:52:26', 0, 0, '', '0'),
(175, 'Abigail ', 'Amarachi ', 'mhizaby@gmail.com ', '07036171468', NULL, 'Imo', 'Female', '$2y$10$SwqTzGbpBbGgaOWr2h4gLOviOhlkJaVgSmqW3/yCrIcBPT0em5jRe', 0, '', '2023-01-11 20:20:04', 0, 0, '', '0'),
(176, 'Choice ', 'Emeka ', 'Emekachoice6@gmail.com', '08161666816', NULL, 'Imo', 'Female', '$2y$10$bDpNDnonyEhJOFtgXg5FcORpK5nG5M9VGfWj1yLumdYwrRvcQp05W', 0, '', '2023-01-11 22:57:33', 0, 0, '', '0'),
(177, 'kennedy', 'ifeanyi', 'kennedyifeanyi27@gmail.com', '08112736693', NULL, 'Imo', 'Male', '$2y$10$9lIySufNAwqSo2utD.FYdeMmC4Eig5tJCZskiTH6V5QrqnjDWW.oy', 0, '', '2023-01-12 19:00:50', 0, 0, '', '0'),
(178, 'Fortune ', 'Chimuanya', 'Kareemdiane24@gmail.com', '08124435319', NULL, 'Imo', 'Female', '$2y$10$nRaDvwEq2RVOBBSvqW3y/OQqs5OQzSQkNuvxVLXxPSg2m8qA10b5a', 0, '', '2023-01-13 08:57:55', 0, 0, '', '0'),
(179, 'Cabrini', 'Iwunze', 'cabrini2002@gmail.com', '09134310399', NULL, 'Imo', 'Male', '$2y$10$ZgSqG12TYkFN24QdkWJ6ROP1cWn5VO1bvNrB1geE06kAwzEd578ie', 0, '', '2023-01-13 17:34:43', 0, 0, '', '0'),
(180, 'Chukwuka ', 'Chukwuemeka ', 'Emekachukwuka04@gmail.com', '07085224443', NULL, 'Imo', 'Male', '$2y$10$/5EHMgiOSXqSJzvgntpiVuGoxtMtJSSuMoMatim4Al.5VZwhBS38O', 0, '', '2023-01-16 11:01:32', 0, 0, '', '0'),
(181, 'Onika', 'Agbeye ', 'Agbeyeblessing@gmail.com', '08183367805', NULL, 'Imo', 'Female', '$2y$10$.Dr/1NjFuBZ1IU7nOl./1OPYq04za4nXyvZUbftWHldqnym/wnpE6', 0, '', '2023-01-17 13:07:22', 0, 0, '', '0'),
(182, 'Rosemary ', 'Ekeada', 'Rosemaryolivia555@gmail.com', '09034908037', NULL, 'Imo', 'Female', '$2y$10$2jDA5QY38z1oDSYQvzWC3u.LlH4D305NEMCWxEHmrQdHI2AvzJoRu', 0, '', '2023-01-21 21:49:15', 0, 0, '', '0'),
(183, 'Rosemary ', 'Ekeada ', 'Rosemaryplivia555@gmail.com', '09034908037', NULL, 'Imo', 'Female', '$2y$10$2vH.G4JxLCQHlQ8c4bWRWOlXP62Rm32KNSy2Zmq8kIMEhH00O7FVm', 0, '', '2023-01-21 21:59:36', 0, 0, '', '0'),
(184, 'Blessing ', 'Iheanacho ', 'Nwabiagiri 24@gmail.com', '08089147597', NULL, 'Imo', 'Female', '$2y$10$LLu5b6lDqoFe4Pv9lMJQtes5DECTB3lCLqkQ07s8Lw8quegzT03UW', 0, '', '2023-01-25 17:15:15', 0, 0, '', '0'),
(185, 'Jason ', 'Temple ', 'jasonchinezendu@gmail.com ', '07042950813', NULL, 'Imo', 'Male', '$2y$10$5HmA93V0UnCnW7rzV8ZyG.rQngXbrZVD5Lay6w6Ua71tc0bF8U/Ou', 0, '', '2023-01-26 20:52:49', 0, 2, '1674799936', '0'),
(186, 'Nonso', 'Emeka', 'commi4340@gmail.com', '09031548504', NULL, 'Imo', 'Male', '$2y$10$YKw2bLVsXbRkp1vk.a1Sse3Bf5f5GOOh/i7ujPKFSfrRReIhKI4n6', 0, '', '2023-01-29 19:11:22', 0, 0, '', '0'),
(187, 'Ogechi judith', 'Egbeh', 'egbehjudith6@gmail.com', '07040722362', NULL, 'Imo', 'Female', '$2y$10$yW1eXwwxwEua1LSSK/Z9yuX9OX.MedP0zSLLbG1vNQfw2n.4jg.Xq', 0, '', '2023-02-02 18:40:46', 0, 0, '', '0'),
(188, 'Nwashiole', 'Cyriacus', 'nwashiolecyriacus887@gmail.com ', '08103737661', NULL, 'Imo', 'Male', '$2y$10$SJkqtKJfrFgqffttnGaJ6.XEdoLABoBIue5BP2/NqmaVASb4WStbu', 0, '', '2023-02-03 09:43:18', 0, 0, '', '0'),
(189, 'Otiri', 'Chioma', 'chiomabetty84@gmail.com', '07083146348', NULL, 'Imo', 'Female', '$2y$10$q7vt791AIVxptxLqY7mdretxhetUwTJphIyhKpiNpsru3P/Iw2HQe', 0, '', '2023-02-04 13:38:26', 0, 0, '', '0'),
(190, 'Okolie', 'Peace', 'Peaceokolie1166@gmail.com', '09063303166', NULL, 'Imo', 'Female', '$2y$10$vYT9swvEOIAxWL8uBikzWey2XI7pQ2wkugBvY4RhmtQQ8YE7MiLMC', 0, '', '2023-02-06 08:32:51', 0, 0, '', '0'),
(191, 'Okeke', 'Franklin ', 'franklinokeke72@gmail.com', '08148483466', 'http://www.findroomy.com/routes/uploaded/findroomate-14364284429B987.jpeg', 'Imo', 'Male', '$2y$10$xEDI0uWdf7Riwrk24az.wuG8ThLgzGba5fHPGxBoXCDBhYqa2MIgm', 0, '', '2023-02-11 12:45:26', 0, 0, '', '0'),
(192, 'Dave', 'Daniel', 'ihenachochidera@gmail.com', '09068103719', NULL, 'Imo', 'Male', '$2y$10$3pPtgZmn286wnOKDTwXncOh5Fe/N1j/PEfZBYEmW8OTE/SwwbLsbS', 0, '', '2023-02-12 00:10:52', 0, 0, '', '0'),
(193, 'Maryjane ', 'Young', 'ymaryjane353@gmail.com', '0907 762 5292 ', 'http://www.findroomy.com/routes/uploaded/findroomate-517213142inboun.jpg', 'Imo', 'Female', '$2y$10$Svt0tI2I2LYLZbTgGCJ1KuRniMwBs8wlUkKireMYceqCCUxcsA4dK', 0, '', '2023-02-16 14:58:33', 0, 0, '', '0'),
(194, 'Nazom', 'Prosper ', 'nazomprosper@gmail.com', '09131291569', NULL, 'Lagos', 'Male', '$2y$10$xPr7.AsjRKEAMjQahZzHD.zzYZD5RAxTsktxVJTjZYGQJGph1Y6TK', 0, '', '2023-02-18 14:52:04', 0, 2, '1676732418', '0'),
(195, 'Oluebube', 'Alisigwe', 'alisigweoluebube16@gmail.com', '+2349030434025', 'http://www.findroomy.com/routes/uploaded/findroomate-998302762023022.jpg', 'Imo', 'Male', '$2y$10$x6I3sXi6Dqx5l0y3Z85iPuSQUS1uMJdMr8OG3qAj4OH/PzH7NlpzS', 0, '', '2023-02-20 20:36:45', 0, 0, '', '0'),
(196, 'Chidinma', 'Okafor', 'chidinmao590@gmail.com', '08101437833', NULL, 'Rivers', 'Female', '$2y$10$9a.lA5nEE95SMF6dSXZFAeSySr86gAA2EyQrhZgLca4IH2Yz/obky', 0, 'E6423', '2023-03-20 11:28:25', 0, 0, '', '0'),
(197, 'Henry ', 'Ndukwu ', 'henryndukwu064@gmail.com', '09153138316', NULL, 'Imo', 'Male', '$2y$10$uwp5Wxujm5b2nkXt0KUuCOWYrezlEG2VagRxlc1qALL2QqWSEiuwG', 0, '', '2023-03-27 18:18:20', 0, 0, '', '0'),
(198, 'Oddy', 'Chigozie', 'stolyhuz@gmail.com', '09014329392', NULL, 'Imo', 'Male', '$2y$10$tWYo4wxtBmzJiIYXgiknFuQ1HpBq.8oCrQzidNnelTV0iQcwrVz2G', 0, '', '2023-03-27 19:06:31', 0, 0, '', '0'),
(199, 'Jude', 'Chikwado ', 'iwunnajudethedeus@gmail.com', '08124313994', NULL, 'Imo', 'Male', '$2y$10$ZmTWL9qnyqqjEshqvojlEe11zegKyYAebxHYwckXQEyKu2.YQa.kK', 0, '', '2023-04-04 18:46:33', 0, 0, '', '0'),
(200, 'Happiness ', 'Sunshine ', 'OkoroChimero@gmail.com', '09162071677', NULL, 'Imo', 'Female', '$2y$10$bkeaHoD292xrgfEHVps0t.MtxtHCXIvZWBeXxj5vSe.vW.orRnf6i', 0, '', '2023-04-08 09:47:10', 0, 0, '', '0'),
(201, 'Michael ', 'Carrick ', 'geraldcarrick55@gmail.com', '07052394616', NULL, 'Imo', 'Male', '$2y$10$HphVjoZ5iDm9Ax0wMYJ7TeKVT/B7nq8VYU0JYDbmbyvu9v9h4nYbu', 0, '', '2023-04-09 07:29:47', 0, 0, '', '0'),
(202, 'Chinaza', 'Eze', 'okoezechinaza@gmail.com', '08149537502', NULL, 'Ebonyi', 'Female', '$2y$10$A5BIDhbI2hGOVwDSgzw2WOGhuFgEjirAKjk6zU81AkbxfAvhApj4G', 0, '', '2023-04-09 16:17:44', 0, 0, '', '0'),
(203, 'Chi Chi', 'Amadi ', 'kingressangel@yahoo.com', '081009999681', NULL, 'Imo', 'Female', '$2y$10$NQRitH26Sdl5svTbvPQFfO8FqhICiH408aan49/U3qEXITG9gUUNK', 0, '', '2023-04-15 21:43:31', 0, 0, '', '0'),
(204, 'Chidinma', 'Anaele', 'Anaelechidinmavera16@gmail.com', '08161427904', NULL, 'Imo', 'Female', '$2y$10$x5bF86dJNvAKahPMcSQuHOj.qlu86sZvQ.xPzod5sF07F5gJGK1bK', 0, '', '2023-04-16 16:49:11', 0, 0, '', '0'),
(205, 'Nwaiwu ', 'Prisca ', 'Priscanwaiwu60@gmail.com', '09077520706', NULL, 'Imo', 'Female', '$2y$10$JO3UHvesaPD9cTi5kiB4oekUnEC2enJ0B0xzD/xj/8b/gBYf8Beum', 0, '', '2023-04-17 01:55:45', 0, 0, '', '0'),
(206, 'Chukwu', 'Isaac', 'chukwuisaac637@gmail.com', '09014241305', 'http://www.findroomy.com/routes/uploaded/findroomate-377553411679859.jpg', 'Imo', 'Male', '$2y$10$kCl4WLypZV07K0Lrt9MPFuNOVFZPuhr9R8HS1EzC48er3K2lrdHCa', 0, '', '2023-04-19 11:14:52', 0, 0, '', '0'),
(207, 'Eni', 'Emmanuel ', 'emmanueluromson@gmail.com', '08144682416', NULL, 'Imo', 'Male', '$2y$10$tQ3E4e4lXD9371S4RSJfUu256e3rWhxb6jRrs6ZiHM6I1TjGRk5YK', 0, '', '2023-05-10 23:39:21', 0, 0, '', '0'),
(208, 'WISDOM ', 'OFOEGBU ', 'ofoegbuwisdom998@gmail.com ', '09064745616', NULL, 'Imo', 'Male', '$2y$10$vE8FryTKZwxfJy0mu0Vv2uTDkRGMK5W9MuKbuykXrv1ZSi4rSH2Hq', 0, '', '2023-05-11 19:00:29', 0, 0, '', '0'),
(209, 'Blossom ', 'Adaeze', 'chukwukablossom09@gmail.com', '09161046635', NULL, 'Imo', 'Female', '$2y$10$4BOVsNi7pBAAjGzD5k45UuKkmAD3j7IERwjkx/RO0shVzAYws40Y6', 0, '', '2023-05-12 13:38:21', 0, 0, '', '0'),
(210, 'Ejiogu', 'Joseph ', 'otitodirichukwupraise@gmail.com', '+2347038415001', NULL, 'Imo', 'Male', '$2y$10$MJTfvq2FhJ.L9zVcYBzQbezXP3gj31yruLJl1sq54xdypyqiuOKJq', 0, '', '2023-05-12 15:23:20', 0, 0, '', '0'),
(211, 'Chimelumeze ', 'Nwabuzor ', 'nwajoshglobaltech@gmail.com', '09036780993', NULL, 'Imo', 'Male', '$2y$10$1kp.SrYNFj2Q3bZMr7A1auTg4Tvhwuv67JqqiOXM2uJgfDlGaTgQ.', 0, '', '2023-05-12 15:44:12', 0, 0, '', '0'),
(212, 'Okezie', 'ogechukwu', 'okezieogechukwu0@gmail.com', '09160061264', NULL, 'Abia', 'Female', '$2y$10$XcLz76xGnWy/Sd3lhz/sQuL0UbI/39uiBnzyot9cF7RreiesMq/9a', 0, '', '2023-05-12 19:17:14', 0, 0, '', '0'),
(213, 'Chiomzy', 'Tess', 'estherchioma1232@gmail.com', '08135546329', 'http://www.findroomy.com/routes/uploaded/findroomate-750482051Screen.png', 'Imo', 'Female', '$2y$10$YjOmrTI7PiAREIBo2tBfr.pc1pRMiwcgWozVYJA/MSDLbN/Yqdpzi', 0, '', '2023-05-12 19:32:18', 0, 0, '', '0'),
(214, 'Anyanwu', 'Kenneth', 'Kennethwayne2011@gmail.com', '09067952361', NULL, 'Imo', 'Male', '$2y$10$EUijwUgpUd2qEUhbkvAOA.NwaPhz3/OQ5FyP1CK15IwNJ7sFx5epi', 0, '', '2023-05-12 20:42:08', 0, 0, '', '0'),
(215, 'Fortune', 'Nwaorie', 'Alexandernwaorie@gmail.com', '09020665572', NULL, 'Imo', 'Male', '$2y$10$gBb9Grf1v5Rtgo/Ar6rzA.61owyur9V1nO3H9UhYcNcDPsWJsQHA2', 0, '', '2023-05-12 21:08:46', 0, 0, '', '0'),
(216, 'Juliet', 'Chukwuemeka', 'chukwuemekajuliet26@gmail.com', '09061308579', NULL, 'Imo', 'Female', '$2y$10$ODodRdmk9R55bJ8ymT8OduqJlCthLKnXqIdLRfUefdf8ujAcv6hRe', 0, '', '2023-05-12 21:25:39', 0, 0, '', '0'),
(217, 'Chigozie', 'Oleka', 'gozioleks@gmail.com', '08083332799', NULL, 'Lagos', 'Male', '$2y$10$O0c46jb.dwiHcymq.hslyOV4T81lZ/04gpgfXdshzvnhpaZdV3e66', 0, '', '2023-05-12 22:21:23', 0, 0, '', '0'),
(218, 'Domnic', 'Williams', 'domnicwilliams4@gmail.com', '+2349123186237', NULL, 'Imo', 'Male', '$2y$10$kGLuSp9z3aP4AnOu/HRAveLEekNwS5AHYiHrDtuCVuTFQc8izxnVq', 0, '', '2023-05-13 09:00:40', 0, 0, '', '0'),
(219, 'Charles ', 'Chisom ', 'charleschacy@gmail.com', '09036047210', NULL, 'Imo', 'Male', '$2y$10$hbnQ98dIdzhkKmwjlPGgJu7tzQGQ4.FI1OjQph9CPzyHvjbh.Ccm2', 0, '', '2023-05-13 10:19:52', 0, 0, '', '0'),
(220, 'Princess', 'Amarachi', 'okpokoamarachi0@gmail.com', '09090069879', NULL, 'Imo', 'Female', '$2y$10$22t1ueG.pMvu/nchF32olOn/FR9zMufZwyws/ge4YxPxNnnO5/qCC', 0, '', '2023-05-13 10:50:30', 0, 0, '', '0'),
(221, 'Akaka', 'Favour', 'fchibuike122@gmail.com', '09034236821', NULL, 'Imo', 'Male', '$2y$10$KHlXhzfBJ.ZGO19YV9aJ3unCSviCI35etCx3jvcAoHnrwk0oPzkbO', 0, '', '2023-05-13 12:06:34', 0, 0, '', '0'),
(222, 'Ebubechukwu ', 'Madubuike ', 'madubuikeebube@gmail.com', '08167360343', NULL, 'Imo', 'Male', '$2y$10$iXDwG0/AKujNDcmZa5lI4.zLVazKvveolbLnGAOEYrLGrKkfPTaqe', 0, '', '2023-05-13 19:36:23', 0, 0, '', '0'),
(223, 'Ekene ', 'Collins ', 'ezeriohaekene808@gmail.com', '08024858155', NULL, 'Imo', 'Male', '$2y$10$.qJCU1fztpFT13mLazP2yOnXlRyttGAPHNEdS7lRvEHD.heQWhg9i', 0, '', '2023-05-13 20:40:10', 0, 0, '', '0'),
(224, 'Michael', 'Kenneth', 'michaeluzochukwu2003@gmail.com', '09035485167', NULL, 'Imo', 'Male', '$2y$10$80wjWGgN8BHOUytL8Dj8Defw40n.bp8/8bQmgC.uI7/dNC5RjHvZi', 0, '', '2023-05-13 21:42:48', 0, 0, '', '0'),
(225, 'Kenneth', 'Precious', 'kennethprecious20@gmail.com', '09129685084', 'http://www.findroomy.com/routes/uploaded/findroomate-1320097758inbou.jpg', 'Imo', 'Female', '$2y$10$d1ZvCf5dXJJyI7er.bsz9.NkZWb6pYVySlokaBYX7Mxsbo1YGQEOO', 0, '', '2023-05-14 11:41:32', 0, 0, '', '0'),
(226, 'Stanley', 'Okafor', 'stanleykingsley41@gmail.com', '09022715604', NULL, 'Imo', 'Male', '$2y$10$KKQRF/nk5BgmJ8ig/uvb8.yU/NXPnoOVG56QCUTB1fT.IkvZAGice', 0, '', '2023-05-14 12:15:36', 0, 0, '', '0'),
(227, 'Promise ', 'Purity', 'Promisepurity2@gmail.com', '08096525152', NULL, 'Imo', 'Female', '$2y$10$f6i.wEG0lO21Iy0XxDruG.terKVsTsQKKV1I3VjhQ4tb6o9FXjRsK', 0, '', '2023-05-14 18:49:50', 0, 0, '', '0'),
(228, 'Promise', 'Charles', 'promisecharles.ng@gmail.com', '09016077474', NULL, 'Imo', 'Male', '$2y$10$AOB7OHh5lz1XqkK04LdPPOQfH/JulwtN5ivG3GYVj9Dcfh2o4vaEC', 0, '', '2023-05-15 16:41:56', 0, 0, '', '0'),
(229, 'Success ', 'Michael ', 'deramichael10@gmail.com', '+2348104883138', NULL, 'Imo', 'Female', '$2y$10$XzytqIeOxg0HVGCFQcaZret6/Ld5k7v8K4ii42GxKFhaIZGWlU8U2', 0, '', '2023-05-16 07:19:38', 0, 0, '', '0'),
(230, 'Nwaegwuatu', 'Chinemerem', 'halonadiva@gmail.com', '09041130546', 'http://www.findroomy.com/routes/uploaded/findroomate-326005391IMG-20.jpg', 'Imo', 'Female', '$2y$10$O9t8T72yxsH2RtrMQ72DruavGK/f9BcTyZ1pbJQW4ZR77qnt1ucEu', 0, '', '2023-05-16 09:30:13', 0, 0, '', '0'),
(231, 'Chiamaka ', 'Favour', 'Chiamakau038@gmail.com', '08104705376', NULL, 'Imo', 'Female', '$2y$10$yKC22LtTf7m8rHuTK27wsOG6YMPdSRpbi5PNphXxfZI9ykpZq5xMW', 0, '', '2023-05-16 13:20:19', 0, 0, '', '0'),
(232, 'Innocentia Lois', 'Akpaka', 'innocentialois@gmail.com', '08169333324', NULL, 'Imo', 'Female', '$2y$10$jqq8gm8RBKpGDr9BavUmSulqzw9jasHS9wulJS3fFL1z3/3AQsS66', 0, '', '2023-05-16 17:45:53', 0, 0, '', '0'),
(233, 'Splenny', 'Obi', 'splendourobioma5@gmail.com ', '09169449617', NULL, 'Imo', 'Female', '$2y$10$Jy9JdIwf7SHdNWBLBmoRl.4YfAf49vVOAxiddpJwScVLyg7jKhis.', 0, '', '2023-05-17 13:15:33', 0, 0, '', '0'),
(234, 'Afams', 'Val', 'progfams@gmail.com', '+23423480375144', NULL, 'Lagos', 'Male', '$2y$10$E5fHcvPTHYmOTzY3QwdaxurS1CQais5Y5ehcP7qYla4WmSn9qmAbS', 0, '', '2023-05-18 07:03:15', 0, 0, '', '0'),
(235, 'Afams', 'Val', 'progfams22@gmail.com', '+23423480375144', NULL, 'Lagos', 'Male', '$2y$10$IGkE0JIX7fZXZf6XmFRVeerdc1HSXsCEyMw2E2qElSb3Blsie9jp2', 0, '', '2023-05-18 17:18:26', 0, 0, '', '0'),
(236, 'Ejem', 'Ekene', 'Okalachigozie@gmail.com', '08140968432', NULL, 'Imo', 'Male', '$2y$10$VMvpdoQZt2aX34G7TdIDIO0aw0.xl19Oo0yiMt99IXtYYDk6GnYNO', 0, '', '2023-05-19 07:13:58', 0, 1, '1684483982', '0');
INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `phone`, `profileURL`, `state`, `gender`, `password`, `blocked`, `code`, `createdAt`, `admin`, `inValidPwdCount`, `inValidPwdTimer`, `status`) VALUES
(237, 'Emmany', 'Christian ', 'emmachristianox123@gmail.com', '08145268227', NULL, 'Imo', 'Male', '$2y$10$6RP3rCxMe87FENSfGaf2veRDhO1NezO11u/0QvY3MRtz11qCe8Ha2', 0, '', '2023-05-20 07:32:19', 0, 0, '', '0'),
(238, 'Emi', 'Okah', 'donokahayibaifiemi@gmail.com', '08149219124', NULL, 'Bayelsa', 'Female', '$2y$10$5Q4Cdk/56O2kGRx.OcICbeeTQjqhAGntk/640lGRPJSWd6j59o4oK', 0, '', '2023-05-20 10:30:57', 0, 0, '', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_images`
--
ALTER TABLE `room_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `room_images`
--
ALTER TABLE `room_images`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=239;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
