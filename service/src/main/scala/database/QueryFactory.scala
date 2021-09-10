package database

import slick.jdbc.SQLActionBuilder
import slick.jdbc.PostgresProfile.api._

class QueryFactory {

  def createTables(): SQLActionBuilder = {
    sql"""
         CREATE TABLE Persons (
             PersonID int,
             LastName varchar(255),
             FirstName varchar(255),
             Address varchar(255),
             City varchar(255)
             );
         """
  }

}
