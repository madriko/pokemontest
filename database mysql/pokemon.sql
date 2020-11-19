-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2020 at 03:26 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pokemon`
--

-- --------------------------------------------------------

--
-- Table structure for table `my_pokemon_list`
--

CREATE TABLE `my_pokemon_list` (
  `id` int(11) NOT NULL,
  `id_pokemon` int(11) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `status` enum('active','disable') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `my_pokemon_list`
--

INSERT INTO `my_pokemon_list` (`id`, `id_pokemon`, `nickname`, `status`) VALUES
(124, 1, 'kurakura', 'active'),
(125, 3, 'yuyu', 'disable'),
(126, 4, 'pika', 'active'),
(127, 1, 'www', 'disable'),
(128, 1, 'kura', 'disable'),
(129, 1, 'erer', 'disable'),
(130, 1, 'bulb', 'disable'),
(131, 1, 'kuraku', 'active'),
(134, 5, 'mander', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `pokemon`
--

CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `qty` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pokemon`
--

INSERT INTO `pokemon` (`id`, `name`, `qty`) VALUES
(1, 'bulbasaur', 2),
(3, 'ivysaur', 1),
(4, 'venusaur', 1),
(5, 'charmander', 1),
(6, 'charmeleon', NULL),
(7, 'charizard', NULL),
(8, 'squirtle', NULL),
(9, 'wartortle', NULL),
(10, 'blastoise', NULL),
(11, 'caterpie', NULL),
(12, 'metapod', NULL),
(13, 'butterfree', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `my_pokemon_list`
--
ALTER TABLE `my_pokemon_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pokemon`
--
ALTER TABLE `pokemon`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `my_pokemon_list`
--
ALTER TABLE `my_pokemon_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=135;

--
-- AUTO_INCREMENT for table `pokemon`
--
ALTER TABLE `pokemon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
