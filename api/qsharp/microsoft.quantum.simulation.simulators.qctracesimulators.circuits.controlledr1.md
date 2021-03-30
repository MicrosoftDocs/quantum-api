---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledR1
title: ControlledR1 operation
ms.date: 3/30/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ControlledR1
qsharp.summary: ControlledR1 is  exp( iφ|11⟩⟨11| )
---

# ControlledR1 operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ControlledR1 is  exp( iφ|11⟩⟨11| )

```qsharp
operation ControlledR1 (angle : Double, a : Qubit, b : Qubit) : Unit is Adj
```


## Input

### angle : [Double](xref:microsoft.quantum.lang-ref.double)

φ


### a : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### b : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

exp( iφ|11⟩⟨11| ) = exp( iφ (I-Z)/2⊗(I-Z)/2 ) == exp( iφ/2² I⊗I) exp(-iφ/2² I⊗Z) exp(-iφ/2² Z⊗I) exp(iφ/2² Z⊗Z)