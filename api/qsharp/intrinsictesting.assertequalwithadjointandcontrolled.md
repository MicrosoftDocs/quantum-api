---
uid: IntrinsicTesting.AssertEqualWithAdjointAndControlled
title: AssertEqualWithAdjointAndControlled operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: IntrinsicTesting
qsharp.name: AssertEqualWithAdjointAndControlled
qsharp.summary: ''
---

# AssertEqualWithAdjointAndControlled operation

Namespace: [IntrinsicTesting](xref:IntrinsicTesting)

Package: [QCIDecompositionsTests](https://nuget.org/packages/QCIDecompositionsTests)




```qsharp
operation AssertEqualWithAdjointAndControlled<'TupleT> (actual : ('TupleT => Unit is Adj + Ctl), expected : ('TupleT => Unit is Adj + Ctl), tupleMapper : (Qubit[] -> (Qubit[], 'TupleT)), tupleSize : Int) : Unit
```


## Input

### actual : 'TupleT => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### expected : 'TupleT => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### tupleMapper : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] -> ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],'TupleT)




### tupleSize : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'TupleT

