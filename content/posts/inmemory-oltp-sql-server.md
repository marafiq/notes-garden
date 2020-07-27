---
title: Introduction to In-Memory OLTP with .NET 5 & EF 5 
date: 2020-07-27
---
(WIP)

SQL Server Enterprise offers scalable memory optimized relational tables. Yes, all data inside table will be loaded in memory. In-Memory tables has two flavors. 
- Durable - Offers ACID 
- Non-Durable 

In-Memory table(s) are relational tables. Only difference is data is reterieved from memory than from disk. Which can significantly reduce your resource consumption & speed.

If you use Entity Framework to query your datbase. You do not need to do anything special about how you manipulate data. It works perfectly.

I wrote a sample app here - [In-Memory SQL App ](https://github.com/marafiq/PerformanceBoostWithSqlServer/blob/master/PerformanceBoostWithSqlServer/Program.cs)

In EF Code First approach, you have to have specific `IsMemoryOptimized`.

```
https://github.com/marafiq/PerformanceBoostWithSqlServer/blob/e02db81f0c5d6f4363a57deaf796de15161a641e/PerformanceBoostWithSqlServer/Program.cs#L117
```





