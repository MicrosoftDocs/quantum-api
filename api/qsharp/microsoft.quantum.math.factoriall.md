---
uid: Microsoft.Quantum.Math.FactorialL
title: FactorialL function
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Math
qsharp.name: FactorialL
qsharp.summary: Returns the factorial of a given integer.
---

# FactorialL function

Namespace: [Microsoft.Quantum.Math](xref:Microsoft.Quantum.Math)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the factorial of a given integer.

```qsharp
function FactorialL (n : Int) : BigInt
```


## Input

### n : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number to take the factorial of.



## Output : [BigInt](xref:microsoft.quantum.qsharp.valueliterals#bigint-literals)

The factorial of the provided input.

## Remarks

This function returns exact factorials for arbitrary-size integers,using a recursive decomposition into double-factorials ($n!!$).In particular, if $n = 2k + 1$ for $k \in \mathbb{N}$, then:$$n! = n!! \times k! \times 2^k,$$where $k!$ can be computed recursively. If $n$ is even, then we canbegin the recursion by computing $n! = n \times (n - 1)!$.

## See Also

- [Microsoft.Quantum.Math.ApproximateFactorial](xref:Microsoft.Quantum.Math.ApproximateFactorial)
- [Microsoft.Quantum.Math.FactorialI](xref:Microsoft.Quantum.Math.FactorialI)