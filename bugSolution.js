```javascript
// Correct approach using $eq for a single value
db.collection.find({ field: { $eq: "value" } });

// Correct approach using $in for multiple values
db.collection.find({ field: { $in: ["value1", "value2"] } });
```