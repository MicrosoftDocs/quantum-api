---
uid: Microsoft.Quantum.Preparation
title: Microsoft.Quantum.Preparation namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Preparation
qsharp.summary: >-
  This namespace contains functions and operations for preparing qubits into
  arbitrary initial states.
---

# Microsoft.Quantum.Preparation namespace

This namespace contains functions and operations for preparing qubits into
arbitrary initial states.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[ApproximatelyPrepareArbitraryState](xref:Microsoft.Quantum.Preparation.ApproximatelyPrepareArbitraryState) |> [!WARNING]
> ApproximatelyPrepareArbitraryState has been deprecated. Please use <xref:Microsoft.Quantum.Preparation.ApproximatelyPrepareArbitraryStateCP> instead.

Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients, up to a given approximation tolerance.
|[ApproximatelyPrepareArbitraryStateCP](xref:Microsoft.Quantum.Preparation.ApproximatelyPrepareArbitraryStateCP) |Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients, up to a given approximation tolerance.
|[ApproximatelyPrepareArbitraryStateD](xref:Microsoft.Quantum.Preparation.ApproximatelyPrepareArbitraryStateD) |Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients, up to a given approximation tolerance.
|[PrepareArbitraryState](xref:Microsoft.Quantum.Preparation.PrepareArbitraryState) |> [!WARNING]
> PrepareArbitraryState has been deprecated. Please use <xref:Microsoft.Quantum.Preparation.PrepareArbitraryStateCP> instead.

Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients.
|[PrepareArbitraryStateCP](xref:Microsoft.Quantum.Preparation.PrepareArbitraryStateCP) |Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients.
|[PrepareArbitraryStateD](xref:Microsoft.Quantum.Preparation.PrepareArbitraryStateD) |Given a set of coefficients and a little-endian encoded quantum register, prepares an state on that register described by the given coefficients.
|[PrepareChoiState](xref:Microsoft.Quantum.Preparation.PrepareChoiState) |Prepares the Choi–Jamiołkowski state for a given operation onto given reference and target registers.
|[PrepareChoiStateA](xref:Microsoft.Quantum.Preparation.PrepareChoiStateA) |Prepares the Choi–Jamiołkowski state for a given operation with an adjoint variant onto given reference and target registers.
|[PrepareChoiStateC](xref:Microsoft.Quantum.Preparation.PrepareChoiStateC) |Prepares the Choi–Jamiołkowski state for a given operation with a controlled variant onto given reference and target registers.
|[PrepareChoiStateCA](xref:Microsoft.Quantum.Preparation.PrepareChoiStateCA) |Prepares the Choi–Jamiołkowski state for a given operation with both controlled and adjoint variants onto given reference and target registers.
|[PrepareEntangledState](xref:Microsoft.Quantum.Preparation.PrepareEntangledState) |Pairwise entangles two qubit registers.
That is, given two registers, prepares the maximally entangled state $\frac{1}{\sqrt{2}} \left(\ket{00} + \ket{11} \right)$ between each pair of qubits on the respective registers, assuming that each register starts in the $\ket{0\cdots 0}$ state.
|[PrepareIdentity](xref:Microsoft.Quantum.Preparation.PrepareIdentity) |Given a register, prepares that register in the maximally mixed state.
The register is prepared in the $\boldone / 2^N$ state by applying the complete depolarizing channel to each qubit, where $N$ is the length of the register.
|[PreparePauliEigenstate](xref:Microsoft.Quantum.Preparation.PreparePauliEigenstate) |Prepares a qubit in the positive eigenstate of a given Pauli operator. If the identity operator is given, then the qubit is prepared in the maximally mixed state.
|[PrepareQubit](xref:Microsoft.Quantum.Preparation.PrepareQubit) |> [!WARNING]
> PrepareQubit has been deprecated. Please use <xref:Microsoft.Quantum.Preparation.PreparePauliEigenstate> instead.

Prepares a qubit in the +1 (`Zero`) eigenstate of the given Pauli operator. If the identity operator is given, then the qubit is prepared in the maximally mixed state.
If the qubit was initially in the $\ket{0}$ state, this operation prepares the qubit in the $+1$ eigenstate of a given Pauli operator, or, for `PauliI`, in the maximally mixed state instead (see <xref:microsoft.quantum.preparation.preparesinglequbitidentity>).
If the qubit was in a state other than $\ket{0}$, this operation applies the following gates: $H$ for `PauliX`, $HS$ for `PauliY`, $I$ for `PauliZ` and <xref:microsoft.quantum.preparation.preparesinglequbitidentity> for `PauliI`.
|[PrepareSingleQubitIdentity](xref:Microsoft.Quantum.Preparation.PrepareSingleQubitIdentity) |Prepares a qubit in the maximally mixed state.
It prepares the given qubit in the $\boldone / 2$ state by applying the depolarizing channel $$ \begin{align} \Omega(\rho) \mathrel{:=} \frac{1}{4} \sum_{\mu \in \{0, 1, 2, 3\}} \sigma\_{\mu} \rho \sigma\_{\mu}^{\dagger}, \end{align} $$ where $\sigma\_i$ is the $i$th Pauli operator, and where $\rho$ is a density operator representing a mixed state.
|[PrepareUniformSuperposition](xref:Microsoft.Quantum.Preparation.PrepareUniformSuperposition) |Creates a uniform superposition over states that encode 0 through `nIndices - 1`.
That is, this unitary $U$ creates a uniform superposition over all number states $0$ to $M-1$, given an input state $\ket{0\cdots 0}$. In other words, $$ \begin{align} U\ket{0}=\frac{1}{\sqrt{M}}\sum_{j=0}^{M-1}\ket{j}. \end{align} $$.
|[_PrepareAmplitudesFromZeroState](xref:Microsoft.Quantum.Preparation._PrepareAmplitudesFromZeroState) |Given a set of coefficients and a little-endian encoded quantum register of unentangled qubits, all of which are in zero state, prepares a state on that register described by the given coefficients. Uses state emulation if supported by the target.

## Functions

| Name | Summary |
|------|---------|
|[BlochSphereCoordinates](xref:Microsoft.Quantum.Preparation.BlochSphereCoordinates) |Computes the Bloch sphere coordinates for a single-qubit state.
Given two complex numbers $a0, a1$ that represent the qubit state, computes coordinates on the Bloch sphere such that $a0 \ket{0} + a1 \ket{1} = r e^{it}(e^{-i \phi /2}\cos{(\theta/2)}\ket{0}+e^{i \phi /2}\sin{(\theta/2)}\ket{1})$.
|[PurifiedMixedState](xref:Microsoft.Quantum.Preparation.PurifiedMixedState) |Returns an operation that prepares a a purification of a given mixed state.A "purified mixed state" refers to states of the form |ψ⟩ = Σᵢ √𝑝ᵢ |𝑖⟩ |garbageᵢ⟩ specified by a vector ofcoefficients {𝑝ᵢ}. States of this form can be reduced to mixed states ρ ≔ 𝑝ᵢ |𝑖⟩⟨𝑖| by tracing over the "garbage"register (that is, a mixed state that is diagonal in the computational basis).See https://arxiv.org/pdf/1805.03662.pdf?page=15 for further discussion.
|[PurifiedMixedStateRequirements](xref:Microsoft.Quantum.Preparation.PurifiedMixedStateRequirements) |Returns the total number of qubits that must be allocated in order to apply the operation returned by @"microsoft.quantum.preparation.purifiedmixedstate".
|[PurifiedMixedStateWithData](xref:Microsoft.Quantum.Preparation.PurifiedMixedStateWithData) |Returns an operation that prepares a a purification of a given mixedstate, entangled with a register representing a given collection of data.A "purified mixed state with data" refers to a state of the form Σᵢ √𝑝ᵢ |𝑖⟩ |𝑥ᵢ⟩ |garbageᵢ⟩,where each 𝑥ᵢ is a bitstring encoding additional data associated with the register |𝑖⟩.See https://arxiv.org/pdf/1805.03662.pdf?page=15 for further discussion.
|[QuantumROM](xref:Microsoft.Quantum.Preparation.QuantumROM) |> [!WARNING]
> QuantumROM has been deprecated. Please use <xref:Microsoft.Quantum.Preparation.PurifiedMixedState> instead.

Uses the Quantum ROM technique to represent a given density matrix.
Given a list of $N$ coefficients $\alpha_j$, this returns a unitary $U$ that uses the Quantum-ROM technique to prepare an approximation  $\tilde\rho\sum_{j=0}^{N-1}p_j\ket{j}\bra{j}$ of the purification of the density matrix $\rho=\sum_{j=0}^{N-1}\frac{|alpha_j|}{\sum_k |\alpha_k|}\ket{j}\bra{j}$. In this approximation, the error $\epsilon$ is such that $|p_j-\frac{|alpha_j|}{\sum_k |\alpha_k|}|\le \epsilon / N$ and $\|\tilde\rho - \rho\| \le \epsilon$. In other words, $$ \begin{align} U\ket{0}^{\lceil\log_2 N\rceil}\ket{0}^{m}=\sum_{j=0}^{N-1}\sqrt{p_j} \ket{j}\ket{\text{garbage}_j}. \end{align} $$
|[QuantumROMQubitCount](xref:Microsoft.Quantum.Preparation.QuantumROMQubitCount) |> [!WARNING]
> QuantumROMQubitCount has been deprecated. Please use <xref:Microsoft.Quantum.Preparation.PurifiedMixedStateRequirements> instead.

Returns the total number of qubits that must be allocated to the operation returned by `QuantumROM`.
|[StatePreparationComplexCoefficients](xref:Microsoft.Quantum.Preparation.StatePreparationComplexCoefficients) |> [!WARNING]
> StatePreparationComplexCoefficients has been deprecated. Please use <xref:Microsoft.Quantum.Preparation.PrepareArbitraryStateCP> instead.

Returns an operation that prepares a specific quantum state.
The returned operation $U$ prepares an arbitrary quantum state $\ket{\psi}$ with complex coefficients $r_j e^{i t_j}$ from the $n$-qubit computational basis state $\ket{0...0}$.
The action of U on a newly-allocated register is given by $$ \begin{align} U\ket{0...0}=\ket{\psi}=\frac{\sum_{j=0}^{2^n-1}r_j e^{i t_j}\ket{j}}{\sqrt{\sum_{j=0}^{2^n-1}|r_j|^2}}. \end{align} $$
|[StatePreparationPositiveCoefficients](xref:Microsoft.Quantum.Preparation.StatePreparationPositiveCoefficients) |> [!WARNING]
> StatePreparationPositiveCoefficients has been deprecated. Please use <xref:Microsoft.Quantum.Preparation.PrepareArbitraryStateD> instead.

Returns an operation that prepares the given quantum state.
The returned operation $U$ prepares an arbitrary quantum state $\ket{\psi}$ with positive coefficients $\alpha_j\ge 0$ from the $n$-qubit computational basis state $\ket{0...0}$.
The action of U on a newly-allocated register is given by $$ \begin{align} U \ket{0\cdots 0} = \ket{\psi} = \frac{\sum_{j=0}^{2^n-1}\alpha_j \ket{j}}{\sqrt{\sum_{j=0}^{2^n-1}|\alpha_j|^2}}. \end{align} $$
|[_CompileApproximateArbitraryStatePreparation](xref:Microsoft.Quantum.Preparation._CompileApproximateArbitraryStatePreparation) |
|[_QuantumROMDiscretization](xref:Microsoft.Quantum.Preparation._QuantumROMDiscretization) |

## User-defined types

| Name | Summary |
|------|---------|
|[MixedStatePreparation](xref:Microsoft.Quantum.Preparation.MixedStatePreparation) |Represents a particular mixed state that can be prepared on an index and a garbage register.
|[MixedStatePreparationRequirements](xref:Microsoft.Quantum.Preparation.MixedStatePreparationRequirements) |Represents the number of qubits required in order to prepare a given mixed state.
<!-- /summaries -->
