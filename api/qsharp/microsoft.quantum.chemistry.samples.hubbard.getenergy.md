---
uid: Microsoft.Quantum.Chemistry.Samples.Hubbard.GetEnergy
title: GetEnergy operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Chemistry.Samples.Hubbard
qsharp.name: GetEnergy
qsharp.summary: >-
  We can now use Canon's phase estimation algorithms to
  learn the ground state energy using the above simulation.
---

# GetEnergy operation

Namespace: [Microsoft.Quantum.Chemistry.Samples.Hubbard](xref:Microsoft.Quantum.Chemistry.Samples.Hubbard)

Package: [SimulateHubbardHamiltonian](https://nuget.org/packages/SimulateHubbardHamiltonian)


We can now use Canon's phase estimation algorithms tolearn the ground state energy using the above simulation.

```qsharp
operation GetEnergy (qSharpData : Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData, nBitsPrecision : Int, trotterStepSize : Double) : (Double, Double)
```


## Input

### qSharpData : [JordanWignerEncodingData](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData)




### nBitsPrecision : [Int](xref:microsoft.quantum.lang-ref.int)




### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)





## Output : ([Double](xref:microsoft.quantum.lang-ref.double),[Double](xref:microsoft.quantum.lang-ref.double))

