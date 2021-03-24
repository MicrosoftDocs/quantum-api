---
uid: Microsoft.Quantum.Samples.PhaseEstimation.Integrated
title: Integrated function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.PhaseEstimation
qsharp.name: Integrated
qsharp.summary: >-
  Integrates a function f using the trapezoidal rule, given samples from
  that function.
---

# Integrated function

Namespace: [Microsoft.Quantum.Samples.PhaseEstimation](xref:Microsoft.Quantum.Samples.PhaseEstimation)

Package: [PhaseEstimationSample](https://nuget.org/packages/PhaseEstimationSample)


Integrates a function f using the trapezoidal rule, given samples fromthat function.

```qsharp
function Integrated (xs : Double[], ys : Double[]) : Double
```


## Input

### xs : [Double](xref:microsoft.quantum.lang-ref.double)[]

An array of the arguments to the function at each sample.


### ys : [Double](xref:microsoft.quantum.lang-ref.double)[]

An array of the function's value at each sample.



## Output : [Double](xref:microsoft.quantum.lang-ref.double)

An approximation of ∫_I f(x) dx, where I is the interval [x₀, xₘ],and where m is the length of `xs`.