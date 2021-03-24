---
uid: Microsoft.Quantum.Samples.ApplyProductWithNegationFunction
title: ApplyProductWithNegationFunction operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples
qsharp.name: ApplyProductWithNegationFunction
qsharp.summary: >-
  A quantum oracle which implements the following function:
  f(x₀, …, xₙ₋₁) = Σᵢ (rᵢ xᵢ + (1 - rᵢ)(1 - xᵢ)) modulo 2 for a given bit vector r = (r₀, …, rₙ₋₁).
---

# ApplyProductWithNegationFunction operation

Namespace: [Microsoft.Quantum.Samples](xref:Microsoft.Quantum.Samples)

Package: [qsharp](https://nuget.org/packages/qsharp)


A quantum oracle which implements the following function:f(x₀, …, xₙ₋₁) = Σᵢ (rᵢ xᵢ + (1 - rᵢ)(1 - xᵢ)) modulo 2 for a given bit vector r = (r₀, …, rₙ₋₁).

```qsharp
operation ApplyProductWithNegationFunction (vector : Bool[], controls : Qubit[], target : Qubit) : Unit is Adj
```


## Input

### vector : [Bool](xref:microsoft.quantum.lang-ref.bool)[]




### controls : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

