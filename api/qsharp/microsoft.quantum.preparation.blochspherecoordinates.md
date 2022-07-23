---
uid: Microsoft.Quantum.Preparation.BlochSphereCoordinates
title: BlochSphereCoordinates function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Preparation
qsharp.name: BlochSphereCoordinates
qsharp.summary: >-
  Computes the Bloch sphere coordinates for a single-qubit state.

  Given two complex numbers $a0, a1$ that represent the qubit state, computes coordinates
  on the Bloch sphere such that
  $a0 \ket{0} + a1 \ket{1} = r e^{it}(e^{-i \phi /2}\cos{(\theta/2)}\ket{0}+e^{i \phi /2}\sin{(\theta/2)}\ket{1})$.
---

# BlochSphereCoordinates function

Namespace: [Microsoft.Quantum.Preparation](xref:Microsoft.Quantum.Preparation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Computes the Bloch sphere coordinates for a single-qubit state.Given two complex numbers $a0, a1$ that represent the qubit state, computes coordinateson the Bloch sphere such that$a0 \ket{0} + a1 \ket{1} = r e^{it}(e^{-i \phi /2}\cos{(\theta/2)}\ket{0}+e^{i \phi /2}\sin{(\theta/2)}\ket{1})$.

```qsharp
function BlochSphereCoordinates (a0 : Microsoft.Quantum.Math.ComplexPolar, a1 : Microsoft.Quantum.Math.ComplexPolar) : (Microsoft.Quantum.Math.ComplexPolar, Double, Double)
```


## Input

### a0 : [ComplexPolar](xref:Microsoft.Quantum.Math.ComplexPolar)

Complex coefficient of state $\ket{0}$.


### a1 : [ComplexPolar](xref:Microsoft.Quantum.Math.ComplexPolar)

Complex coefficient of state $\ket{1}$.



## Output : ([ComplexPolar](xref:Microsoft.Quantum.Math.ComplexPolar),[Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals),[Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals))

A tuple containing `(ComplexPolar(r, t), phi, theta)`.