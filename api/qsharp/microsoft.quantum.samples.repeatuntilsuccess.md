---
uid: Microsoft.Quantum.Samples.RepeatUntilSuccess
title: Microsoft.Quantum.Samples.RepeatUntilSuccess namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.RepeatUntilSuccess
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.RepeatUntilSuccess namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApplyAndMeasurePart1](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.ApplyAndMeasurePart1) |Apply part 1 of RUS circuit (red circuit shown in README) and measure auxiliary qubit in Pauli X basis
|[ApplyAndMeasurePart2](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.ApplyAndMeasurePart2) |Apply part 2 of RUS circuit (blue circuit shown in README) and measure resource qubit in Pauli X basis
|[ApplyRzArcTan2](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.ApplyRzArcTan2) |Apply Rz(arctan(2)) on qubits using repeat until success algorithm.
|[ApplySimpleGate](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.ApplySimpleGate) |Apply (I + i√2X)/√3 on qubits using repeat until success algorithm.
|[ApplySimpleRUSCircuit](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.ApplySimpleRUSCircuit) |Apply RUS circuit on qubit register
|[AssertQubitIsInState](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.AssertQubitIsInState) |Assert target qubit state is the desired input value in the desired input basis.
## target
Target qubit
## inputBasis
Pauli basis in which to prepare input qubit
## inputValue
Boolean value for input qubit (true maps to One, false maps to Zero)
|[CreateQubitsAndApplyRzArcTan2](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.CreateQubitsAndApplyRzArcTan2) |Example of a Repeat-until-success algorithm implementing a circuitthat achieves exp(i⋅ArcTan(2)⋅Z) by Paetznick & Svore.The exp(𝑖 ArcTan(2) 𝑍) operation is also known as the "𝑉 gate."
|[CreateQubitsAndApplySimpleGate](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.CreateQubitsAndApplySimpleGate) |Example of a Repeat-until-success algorithm implementing a circuit that achieves (I + i√2X)/√3 by Paetznick & Svore. This is the smallest circuit found in the referenced work and described in figure 8.
|[InitializeQubits](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.InitializeQubits) |Initialize axiliary and resource qubits in |+⟩, target in |0⟩ or |1⟩.
|[RunProgram](xref:Microsoft.Quantum.Samples.RepeatUntilSuccess.RunProgram) |Example of a Repeat-until-success algorithm implementing a circuit decomposition by Paetznick & Svore.


<!-- /summaries -->
