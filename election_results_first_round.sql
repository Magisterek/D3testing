-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 10, 2020 at 11:47 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `election_results_first_round`
--

CREATE TABLE `election_results_first_round` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` text COLLATE utf8_polish_ci NOT NULL,
  `votes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Dumping data for table `election_results_first_round`
--

INSERT INTO `election_results_first_round` (`id`, `name`, `votes`) VALUES
(1, 'Andrzej Duda', 8450513),
(2, 'Rafał Trzaskowski', 5917340),
(3, 'Szymon Hołownia', 2693397),
(4, 'Krzysztof Bosak', 1317380),
(5, 'Władysław Kosiniak-Kamysz', 459365),
(6, 'Robert Biedroń', 432129),
(7, 'Stanisław Żółtek', 45419),
(8, 'Marek Jakubiak', 33652),
(9, 'Paweł Tanajno', 27909),
(10, 'Waldemar Witkowski', 27290),
(11, 'Mirosław Piotrowski', 21065);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `election_results_first_round`
--
ALTER TABLE `election_results_first_round`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `election_results_first_round`
--
ALTER TABLE `election_results_first_round`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
