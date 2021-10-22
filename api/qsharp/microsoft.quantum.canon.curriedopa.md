---
uid: Microsoft.Quantum.Canon.CurriedOpA
title: CurriedOpA function
ms.date: 10/22/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: CurriedOpA
qsharp.summary: Returns a curried version of an operation on two inputs.
---

# CurriedOpA function

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a curried version of an operation on two inputs.

```qsharp
function CurriedOpA<'T, 'U> (op : (('T, 'U) => Unit is Adj)) : ('T -> ('U => Unit is Adj))
```


## Input

### op : ('T,'U) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

An operation whose input is a pair.



## Output : 'T -> 'U => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

An operation which accepts the first element of a pair and returnsan operation which accepts as its input the second element of theoriginal operation's input.

## Type Parameters

### 'T

The type of the first component of a function defined on pairs.
### 'U

The type of the second component of a function defined on pairs.

## Remarks

The following are equivalent:```qsharpop(x, y);let curried = CurriedOp(op);let partial = curried(x);partial(y);```

## See Also

- [Microsoft.Quantum.Canon.CurriedOp](xref:Microsoft.Quantum.Canon.CurriedOp)
- [Microsoft.Quantum.Canon.CurriedOpC](xref:Microsoft.Quantum.Canon.CurriedOpC)
- [Microsoft.Quantum.Canon.CurriedOpCA](xref:Microsoft.Quantum.Canon.CurriedOpCA)