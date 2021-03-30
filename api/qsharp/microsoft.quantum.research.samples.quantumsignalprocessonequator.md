---
uid: Microsoft.Quantum.Research.Samples.QuantumSignalProcessOnEquator
title: QuantumSignalProcessOnEquator operation
ms.date: 3/30/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Research.Samples
qsharp.name: QuantumSignalProcessOnEquator
qsharp.summary: >-
  Converts a the unitary evolution applied by walkOperation to another
  operation, represented by a unitary operator whose eigenvalues are
  transformed by a function encoded in angles.
---

# QuantumSignalProcessOnEquator operation

Namespace: [Microsoft.Quantum.Research.Samples](xref:Microsoft.Quantum.Research.Samples)

Package: [qsp](https://nuget.org/packages/qsp)


Converts a the unitary evolution applied by walkOperation to anotheroperation, represented by a unitary operator whose eigenvalues aretransformed by a function encoded in angles.

```qsharp
operation QuantumSignalProcessOnEquator (angles : Double[], walkOperation : (Qubit[] => Unit is Adj + Ctl), qubits : Qubit[]) : Unit
```


## Input

### angles : [Double](xref:microsoft.quantum.lang-ref.double)[]

Angles measured in radians from x-axis of the Bloch sphere. These angles are computed by quantum signal preprocessing.There must be an odd number of angles.


### walkOperation : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

A unitary operator, which can be anything but depends on the purpose.


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A set of qubits on which walkOperation acts.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The eigenvalue transformation function that is realized in this operation by the input angles,always has even real part and odd imaginary part.The angles specify the directions of the projectors of primitive matrices. See [Haah, https://arxiv.org/abs/1806.10236].These are not exactly the angles that appear in [Low, Chuang, https://arxiv.org/abs/1610.06546], though they are linearly related.An auxillary qubit is allocated internally while running this operation.