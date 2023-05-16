## Commonly used command-line operations

Here are some commonly used command-line operations to handle data in MongoDB:

1. Start the MongoDB Shell:
   ```
   mongo
   ```

2. Show all databases:
   ```
   show databases
   ```

3. Switch to a specific database:
   ```
   use database_name
   ```

4. Show all collections in the current database:
   ```
   show collections
   ```

5. Insert a document into a collection:
   ```
   db.collection_name.insertOne({ field1: value1, field2: value2, ... })
   ```

6. Insert multiple documents into a collection:
   ```
   db.collection_name.insertMany([
     { field1: value1, field2: value2, ... },
     { field1: value3, field2: value4, ... },
     ...
   ])
   ```

7. Find documents in a collection:
   ```
   db.collection_name.find({ field: value })
   ```

8. Find documents with a specific field value:
   ```
   db.collection_name.find({ field: { $eq: value } })
   ```

9. Find documents and specify fields to include/exclude:
   ```
   db.collection_name.find({ field: value }, { field1: 1, field2: 1, ... })
   ```

10. Update a document in a collection:
    ```
    db.collection_name.updateOne({ _id: ObjectId("document_id") }, { $set: { field: new_value } })
    ```

11. Update multiple documents in a collection:
    ```
    db.collection_name.updateMany({ field: value }, { $set: { field: new_value } })
    ```

12. Delete a document from a collection:
    ```
    db.collection_name.deleteOne({ _id: ObjectId("document_id") })
    ```

13. Delete multiple documents from a collection:
    ```
    db.collection_name.deleteMany({ field: value })
    ```

14. Sort documents in a collection:
    ```
    db.collection_name.find().sort({ field: 1 }) // Ascending order
    db.collection_name.find().sort({ field: -1 }) // Descending order
    ```

15. Limit the number of documents returned:
    ```
    db.collection_name.find().limit(5)
    ```

16. Skip a specified number of documents:
    ```
    db.collection_name.find().skip(10)
    ```

17. Count the number of documents in a collection:
    ```
    db.collection_name.count()
    ```

These commands provide a starting point for performing common operations in MongoDB from the command line. Remember to replace `collection_name`, `database_name`, `field`, `value`, and `document_id` with the actual names and values specific to your MongoDB setup and data.

For more advanced operations and additional command-line options, you can refer to the MongoDB documentation: https://docs.mongodb.com/manual/reference/mongo-shell/

Please note that some of these commands might have changed or have different syntax depending on the MongoDB version you are using.

## Logical Query Operators

In MongoDB, logical query operators are used to perform queries that involve logical conditions and operators such as logical AND, logical OR, and logical NOT. These operators allow you to construct more complex queries to retrieve data from the database. Here are the commonly used logical query operators in MongoDB:

1. $and: Performs a logical AND operation on an array of two or more query conditions. Only documents that satisfy all the conditions in the $and expression will be matched.
```javascript
db.collection_name.find({
  $and: [
    { condition1 },
    { condition2 },
    // ...
  ]
})
```

2. $or: Performs a logical OR operation on an array of two or more query conditions. Documents that satisfy at least one of the conditions in the $or expression will be matched.
```javascript
db.collection_name.find({
  $or: [
    { condition1 },
    { condition2 },
    // ...
  ]
})
```

3. $nor: Performs a logical NOR operation on an array of two or more query conditions. Documents that fail to satisfy all the conditions in the $nor expression will be matched.
```javascript
db.collection_name.find({
  $nor: [
    { condition1 },
    { condition2 },
    // ...
  ]
})
```

4. $not: Performs a logical NOT operation on a query condition. Matches documents that do not satisfy the specified condition.
```javascript
db.collection_name.find({
  field: { $not: { condition } }
})
```

5. $exists: Matches documents that have the specified field, regardless of its value.
```javascript
db.collection_name.find({
  field: { $exists: true }
})
```

6. $type: Matches documents where the value of a field has the specified BSON type.
```javascript
db.collection_name.find({
  field: { $type: type }
})
```
Here, `type` can be a BSON type number or a string representation of the BSON type.

These logical query operators can be combined and nested to construct complex query conditions based on your specific requirements. Remember to adjust `collection_name`, `field`, and `condition` as per your actual collection and query conditions.

For more information and examples, you can refer to the MongoDB documentation on query operators: https://docs.mongodb.com/manual/reference/operator/query/logical/