---
uid: Microsoft.Quantum.Diagnostics.Test
title: Test user defined type
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Diagnostics
qsharp.name: Test
qsharp.summary: Compiler-recognized attribute used to mark a unit test.
---

# Test user defined type

Namespace: [Microsoft.Quantum.Diagnostics](xref:Microsoft.Quantum.Diagnostics)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Compiler-recognized attribute used to mark a unit test.

```qsharp

@ Microsoft.Quantum.Core.Attribute()
newtype Test = (ExecutionTarget : String);
```



## Named Items

### ExecutionTarget : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)



## Example

The following is a unit test that checks if `2 + 3` is `5`:```qsharp@Test("QuantumSimulator")function AdditionIsCorrect() : Unit {    EqualityFactI(2 + 3, 5, "Addition did not work correctly.");}```