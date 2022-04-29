---
uid: Microsoft.Quantum.Logical.Xor
title: Xor function
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Logical
qsharp.name: Xor
qsharp.summary: Returns the Boolean exclusive disjunction of two values.
---

# Xor function

Namespace: [Microsoft.Quantum.Logical](xref:Microsoft.Quantum.Logical)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the Boolean exclusive disjunction of two values.

```qsharp
function Xor (a : Bool, b : Bool) : Bool
```


## Input

### a : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

The first value to be considered.


### b : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

The second value to be considered.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if exactly one of `a` and `b` is `true`.