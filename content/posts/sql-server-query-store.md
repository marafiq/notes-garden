---
title: SQL Server Query Store - Performance Monitoring and Troubleshooting Queries
date: 2020-07-19
---
Query Store allows you to monitor and troubleshoot queries. It also provides stats about runtime such as CPU, IO and Memory.

Enable Query Store with default configuration using below SQL. It is enabled at database level.
~~~ SQL
USE DatabaseName
SET QUERY_STORE = ON ( WAIT_STATS_CAPTURE_MODE = ON );
~~~ 

**Use Case 01 - Query Performance Regression with Audit Query Plan History**
A new release is deployed. Everyone is happy untill SQL Server is acting up. Because one of the query has gone crazy. But it does not act crazy all the time. How would you find out?
Pre-Query Store, you can not get plan history in time. But with Query Store you can look at plan history. It gives you the crazy plan. Who knows its not hitting one of the indexes you created. Or someone added another extra field to select which is not covered by the index. If you use ORM - Entity Framework, its high chance you encounterd this situation. 
To get situation under control, Query Store allows you to force _the good_  query plan untill you identify the actual cause by looking at plan. Another good thing is it provides you the actual query plan than estimated one (which is always wrong). 

