---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
title: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits namespace
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.summary: ''
---

# Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[AndLadder](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.AndLadder) | |
|[ApplyByIndexAdjointableControllable](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ApplyByIndexAdjointableControllable) |Applies operation given by op to array of qubits constructed as [ target[k] : k ∈ index ] |
|[CCNOT](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CCNOT) | |
|[CCX](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CCX) |Doubly-controlled X. Maps qubits in computational state |a,b,c⟩ to |a,b,(c⊕(a∧b)⟩ |
|[CCZ](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CCZ) |Unitary version of Controlled-Controlled-Z, gate |
|[CCminusIX](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CCminusIX) |Controlled-controlled -iX |
|[CCminusIZ](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CCminusIZ) | |
|[CNOT](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CNOT) | |
|[CZ](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CZ) | |
|[ControlledH](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledH) | |
|[ControlledR](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledR) |ControlledR is exp( iφ|1⟩⟨1|⊗P) on qubits 1 and 2 |
|[ControlledR1](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledR1) |ControlledR1 is  exp( iφ|11⟩⟨11| ) |
|[ControlledR1Frac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledR1Frac) | |
|[ControlledRFrac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledRFrac) |ControlledR is exp( iφ|1⟩⟨1|⊗P) on qubits 1 and 2 |
|[ControlledRZ](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledRZ) |ControlledRZ is exp( iφ|1⟩⟨1|⊗Z) |
|[ControlledRZFrac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledRZFrac) |ControlledRZFrac is exp( i πk/2ⁿ|1⟩⟨1|⊗Z) |
|[ControlledSWAP](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledSWAP) | |
|[ControlledT](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledT) | |
|[ControlledTPower](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledTPower) |Power of Controlled T gate |
|[ControlledTS](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledTS) | |
|[Exp](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Exp) |Performs exp( i φ P₁ ⊗ … ⊗ Pₙ ) |
|[ExpFrac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpFrac) | |
|[ExpFracZZ](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpFracZZ) |ExpFracZZ is exp( i π k/2ⁿ Z⊗Z ) |
|[ExpFracZZZ](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpFracZZZ) |ExpFracZZZ is exp( i pi k/2ⁿ Z⊗Z⊗Z ) |
|[ExpNoId](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpNoId) | |
|[ExpNoIdFrac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpNoIdFrac) | |
|[ExpZZ](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpZZ) |ExpFracZZ is exp( i φ Z⊗Z ) |
|[H](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.H) | |
|[HY](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.HY) | |
|[InternalCX](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalCX) | |
|[InternalH](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalH) |Hadamard gate, e.g. [[1,1],[1,-1]]/Sqrt{2} |
|[InternalHY](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalHY) |Hadamard gate, e.g. [[1,1],[1,-1]]/Sqrt{2} |
|[InternalPauli](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalPauli) | |
|[InternalR](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalR) | |
|[InternalRFrac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalRFrac) | |
|[InternalRz](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalRz) | |
|[InternalRzFrac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalRzFrac) | |
|[InternalS](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalS) |S gate, e.g. [[1,0],[0,i]] |
|[InternalSWAP](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalSWAP) | |
|[InternalT](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.InternalT) | |
|[MultiCX](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiCX) | |
|[MultiControlledFromOpAndSinglyCtrldOp](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiControlledFromOpAndSinglyCtrldOp) | |
|[MultiControlledFromOpAndSinglyCtrldOp2](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiControlledFromOpAndSinglyCtrldOp2) | |
|[MultiControlledMultiNot](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiControlledMultiNot) | |
|[MultiControlledU](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiControlledU) |Applies multiply controlled unitary given a singly controlled one |
|[MultiControlledUTwoTargets](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiControlledUTwoTargets) |Applies multiply controlled unitary given a singly controlled one |
|[MultiPauliFlip](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiPauliFlip) |Applies Clifford that maps Zₖ to P₁ ⊗ … ⊗ Pₙ by conjugation |
|[MultiX](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiX) | |
|[PauliXFlip](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.PauliXFlip) |Applies a Clifford unitary that maps by conjugation Pauli X to Pauli given by 'basis' argument. The unitary is applied to the qubit given by 'target' argument |
|[PauliZFlip](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.PauliZFlip) |Applies a Clifford unitary that maps by conjugation Pauli Z to Pauli given by 'basis' argument. The unitary is applied to the qubit given by 'target' argument |
|[R](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.R) | |
|[R1](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.R1) | |
|[R1Frac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.R1Frac) | |
|[RFrac](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.RFrac) | |
|[Rx](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Rx) | |
|[Ry](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Ry) | |
|[Rz](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Rz) | |
|[S](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.S) | |
|[SWAP](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.SWAP) | |
|[T](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.T) | |
|[Ty](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Ty) | |
|[X](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.X) | |
|[Y](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Y) | |
|[Z](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Z) | |

## Functions

| Name | Summary |
|------|---------|
|[Enum_H](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Enum_H) | |
|[Enum_HSH](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Enum_HSH) | |
|[Enum_HthenS](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Enum_HthenS) | |
|[Enum_Identity](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Enum_Identity) | |
|[Enum_S](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Enum_S) | |
|[Enum_SthenH](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Enum_SthenH) | |
|[FailOn](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.FailOn) |Calls "fail message" when the first argument is True |
|[IndicesOfNonIdentity](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.IndicesOfNonIdentity) |Returns array of indices of paulies that are not equal to PauliI |
|[Mod](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Mod) |returns 'val' modulo modulus |
|[PauliArrayByIndex](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.PauliArrayByIndex) |Creates a new array of the form [ paulies[i] : i ∈ indices ] |
|[ReducedForm](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ReducedForm) |returns fraction j/2ᵐ represented as tuple (j,m) equal to k/2ⁿ such that j is odd when k is 0, returns (0,0) |
|[_reducedFormRec](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits._reducedFormRec) | |

<!-- /summaries -->
