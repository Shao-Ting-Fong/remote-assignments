-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: assignment
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `articles`
--

DROP TABLE IF EXISTS `articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `articles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author_id` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `articles`
--

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;
INSERT INTO `articles` VALUES (1,1,'Article 1','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(2,2,'Article 2','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(3,3,'Article 3','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(4,4,'Article 4','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(5,1,'Article 5','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(6,2,'Article 6','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(7,3,'Article 7','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(8,4,'Article 8','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(9,1,'Article 9','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(10,2,'Article 10','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(11,3,'Article 11','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(12,4,'Article 12','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(13,1,'Article 13','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(14,2,'Article 14','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(15,3,'Article 15','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(16,4,'Article 16','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(17,1,'Article 17','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(18,2,'Article 18','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(19,3,'Article 19','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(20,4,'Article 20','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(21,1,'Article 21','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(22,2,'Article 22','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(23,3,'Article 23','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(24,4,'Article 24','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(25,1,'Article 25','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(26,2,'Article 26','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(27,3,'Article 27','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(28,4,'Article 28','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(29,1,'Article 29','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!'),(30,2,'Article 30','Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptates, maiores dolores deserunt qui quo fugiat, error eligendi magnam similique accusantium fuga in iure aliquam ex pariatur vitae! In, repudiandae!');
/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'a@gmail.com','$2b$12$EimPJWPZp2W9o0DJBuRNn.Icgu9mUxaW.NsXAfHPoUm.9xd7nsesy'),(2,'b@gmail.com','$2b$12$9wFYDN/q62Ptr7N6TF.a.uAWWhj5/bcpeMqysL6.idIpH4.u/p/Xm'),(3,'c@gmail.com','$2b$12$kUkUzZ22ANjHCKXHSMU...EG3nPNCjyU8Iz6XVmi.gsNfx6ZGNFbS'),(4,'d@gmail.com','$2b$12$jbiUqOtmQN8jm7pubE3P7OpwGMVNTUaQlQJ08OrMmmjAO7vqRL6ye');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-20 18:26:13
