---
uid: IntrinsicTesting.ExecuteWithAdjointAndControlled
title: ExecuteWithAdjointAndControlled operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: IntrinsicTesting
qsharp.name: ExecuteWithAdjointAndControlled
qsharp.summary: ''
---

# ExecuteWithAdjointAndControlled operation

Namespace: [IntrinsicTesting](xref:IntrinsicTesting)

Package: [QCIDecompositionsTests](https://nuget.org/packages/QCIDecompositionsTests)




```qsharp
operation ExecuteWithAdjointAndControlled<'TupleT> (op : ('TupleT => Unit is Adj + Ctl), tupleMapper : (Qubit[] -> (Qubit[], 'TupleT)), tupleSize : Int) : Unit
```


## Input

### op : 'TupleT => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### tupleMapper : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] -> ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],'TupleT)




### tupleSize : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'TupleT

